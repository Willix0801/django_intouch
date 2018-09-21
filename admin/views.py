# Create your views here.
# Create your views here.
from django.contrib.auth.models import User
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from reports import UsersReport
from w_report import simple
from django.db.models import Q
from geraldo.generators import PDFGenerator
from customers.models import items
from admin.models import UserProfile
from django.core import serializers
import json
import sys
from rbac.models import RBACRole, RBACOperation, RBACPermission, RBACGenericPermission



@csrf_exempt
def getUserNames(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        usernames = request.user.get_full_name()
        return HttpResponse(usernames)
    
    
@csrf_exempt
def getusers(request):
    
    if not request.user.is_authenticated():
        print 'oo'
        return HttpResponseRedirect('/login')
    else:
        try:
        
            print dir(RBACRole)
            users = User.objects.all().exclude(is_superuser=True).order_by('first_name','last_name')
            if 'pattern' in request.POST.keys():
                pattern=request.POST['pattern']
                users=users.filter(Q(is_staff=True) & (Q(username__icontains=pattern) | Q(first_name__icontains=pattern) | Q(last_name__icontains=pattern) | Q(email__icontains=pattern))).exclude(is_superuser=True).order_by('first_name','last_name')
            arr = []
            print users
            for user in users:
                
                fields = {}
                fields['id'] = user.id,
                fields['username'] = user.username,
                fields['firstname'] = user.first_name,
                fields['lastname'] = user.last_name,
                fields['email'] = user.email
                fields['created'] = user.date_joined.__format__('%d %b %Y %I:%M%p'),
                fields['lastlogin'] = user.last_login.__format__('%d %b %Y %I:%M%p'),
                fields['active'] = user.is_active,
                
                mapped = {'fields': fields}
    #             print mapped
                
                arr.append(mapped)
                response = {'response': arr}
                print(json.dumps(response))
            return HttpResponse(json.dumps(response))
        
        except:
            []
#             print "Unexpected error:", sys.exc_info()[0]
#             raise
    return HttpResponse('')

@csrf_exempt
def addUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            user = User()
            user.username = request.POST.get('username')
            user.first_name = request.POST.get('firstname')
            user.last_name = request.POST.get('lastname')
            user.email = request.POST.get('email')
            user.set_password(request.POST.get('password'))
            user.is_staff = True,
            user.is_active = True,
            user.save()
            print(user.id)
        return HttpResponseRedirect('/')
    
@csrf_exempt
def editUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            
            prik = request.POST.get('primarykey')
            user = User.objects.get(id=prik)
            user.username = request.POST.get('username')
            user.first_name = request.POST.get('firstname')
            user.last_name = request.POST.get('lastname')
            user.email = request.POST.get('email')
            user.set_password(request.POST.get('password'))
            user.is_staff = True,
            user.is_active = True,
            user.save()
        
        return HttpResponseRedirect('/')
    
@csrf_exempt
def delUser(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            
            prik = request.POST.get('primarykey')
            user = User.objects.get(id=prik)
            user.delete()
        
        return HttpResponseRedirect('/')
            
@csrf_exempt
def userProfile(request):       
    try:
            
        if UserProfile.objects.filter(user_id=request.user.id).exists():
            user=UserProfile.objects.get(user_id=request.user.id)
            arr = []
            fields = {}
            fields['username'] = request.user.username
            fields['first_name'] = request.user.first_name
            fields['last_name'] = request.user.last_name
            fields['email'] = request.user.email
            fields['title'] = user.title
            fields['homephone'] = user.homephone
            fields['mobilephone'] = user.mobilephone
            fields['businessphone'] = user.businessphone
            fields['webpage'] = user.webpage
            fields['skype'] = user.skype
            fields['businessaddress'] = user.businessaddress
            fields['homeaddress'] = user.homeaddress
    
            arr.append(fields)
            response = json.dumps(arr)
            return HttpResponse(response)
        
        else:
            
            profile = UserProfile()
            profile.user_id = request.user.id
            profile.save()
            user=UserProfile.objects.get(user_id=request.user.id)
            arr = []
            fields = {}
            fields['username'] = request.user.username
            fields['first_name'] = request.user.first_name
            fields['last_name'] = request.user.last_name
            fields['email'] = request.user.email
            fields['title'] = user.title
            fields['homephone'] = user.homephone
            fields['mobilephone'] = user.mobilephone
            fields['businessphone'] = user.businessphone
            fields['webpage'] = user.webpage
            fields['skype'] = user.skype
            fields['businessaddress'] = user.businessaddress
            fields['homeaddress'] = user.homeaddress
            
            arr.append(fields)
            response = json.dumps(arr)
            return HttpResponse(response)
    except:
        print 'unexpected error: ', sys.exc_info()[0]
        return HttpResponse('test')

@csrf_exempt
def report(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        if request.method == 'GET':
            
            try:
                test = request.POST.get('userr_id')
                resp = HttpResponse(mimetype='application/pdf')
                queryset = User.objects.order_by('id')
                report = UsersReport(queryset=queryset)
                report.generate_by(PDFGenerator, filename=resp)
        
                return resp
            except:
                print "Unexpected error:", sys.exc_info()[0]
                raise
     
    