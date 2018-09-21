from django.shortcuts import render, render_to_response, get_object_or_404 
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
import sys
import smtplib
from django.core.mail import EmailMessage, BadHeaderError
#from django.template import RequestContext
from django.contrib import auth
from django.views.decorators.csrf import csrf_exempt
from datetime import time
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.core.context_processors import csrf # import for csrf_token
from django.template import Template, Context



@csrf_exempt
def index(request):
    if not request.user.is_authenticated():
        print 'usar'
        return HttpResponseRedirect('/login')
    else:
        c = {}
        c.update(csrf(request))           
        return render(request, 'index.html', c)
@csrf_exempt
def getUserNames(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        usernames = request.user.get_full_name()
        return HttpResponse(usernames)
          

@csrf_exempt   
def login(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('login.html', c)


@csrf_exempt 
def send_emaill(username, receiver, platform):
    content = str(username) +' a new login from Intouch Communications-LTD System from '+platform
    mail = smtplib.SMTP('smtp.gmail.com', 587)
    mail.ehlo()
    mail.starttls()
    mail.login('intouchcommunications8@gmail.com', 'extjs0783204240@')
    mail.sendmail('intouchcommunications8@gmail.com', receiver, content)
    
@csrf_exempt
def login_user(request):
    
    try:
        
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            platform = str(request.POST.get('platform'))
            print platform
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    auth.login(request, user)
                    current_user = request.user
                    full_names = current_user.get_full_name()
                    email = current_user.email
                    print email
#                     send_emaill(full_names, email, platform)
                    print full_names
                    print 'Yeah it went'
#                     
#                     if subject and message and from_email:
#                         try:
#                             send_mail(subject, message, from_email, ['muganwa0801@gmail.com'])
#                         except BadHeaderError:
#                             return HttpResponse('Invalid header found.')
    
                    return HttpResponse(full_names)
            else: 
                []
        else:
            []
            
    except: 
#         []
        print "Unexpected error:", sys.exc_info()[0]
        raise


@csrf_exempt
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')
        

            
            
      
    