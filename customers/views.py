# Create your views here.
from django.contrib.auth.models import User
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from customers.models import *
from django.db.models import Q
from django.db.models import Sum
from geraldo.generators import PDFGenerator
from geraldo import ReportBand,ObjectValue,Label,SubReport,BAND_WIDTH,Rect,Image,Line
from reportlab.lib.enums import TA_RIGHT, TA_CENTER,TA_LEFT
from reportlab.lib import colors
from reportlab.lib.units import cm
# from report import MyFamilyReport
from invoice import invoicepdf, invoiceinfos, invoicepdfdollar
import json
import sys
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
from django.core.exceptions import ValidationError
from datetime import datetime
from django.utils.datastructures import MultiValueDictKeyError


@csrf_exempt
def getCustomers(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
            customers = customersaccounts.objects.all().order_by('customer_name','customer_number')
            if 'pattern' in request.POST.keys():
                pattern=request.POST['pattern']
                customers=customers.filter(Q(customer_name__icontains=pattern) | Q(customer_number__icontains=pattern) | Q(customer_type__icontains=pattern) | Q(customer_location__icontains=pattern) | Q(customer_email__icontains=pattern) | Q(customer_tel__icontains=pattern) | Q(customer_typeofwork__icontains=pattern) | Q(customer_tin__icontains=pattern) | Q(customer_website__icontains=pattern)).order_by('customer_name','customer_number')
                           
            arr = []
            for customer in customers:
                
                fields = {}
                fields['id'] = customer.id,
                fields['name'] = customer.customer_name,
                fields['number'] = customer.customer_number,
                fields['type'] = customer.customer_type,
                fields['location'] = customer.customer_location,
                fields['telephone'] = str(customer.customer_tel),
                fields['email'] = customer.customer_email,
                fields['typeofwork'] = customer.customer_typeofwork,
                fields['tin'] = customer.customer_tin,
                fields['website'] = customer.customer_website,
                
                mapped = {'fields': fields}
                arr.append(mapped)
                response = {'response': arr}
            return HttpResponse(json.dumps(response))
        
        except:
            []
#             print "Unexpected error:", sys.exc_info()[0]
#             raise
    return HttpResponse('')

@csrf_exempt
def addCustomer(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        
        if request.method == 'POST':
            customer = customersaccounts()
            customer.customer_name  = request.POST.get('cust_name')
            customer.customer_number = request.POST.get('cust_number')
            customer.customer_tin = request.POST.get('cust_tin')
            customer.customer_website = request.POST.get('cust_website')
            customer.customer_email = request.POST.get('cust_email')
            customer.customer_tel = str(request.POST.get('cust_telephone'))
            customer.customer_type = request.POST.get('cust_type')
            customer.customer_typeofwork = request.POST.get('cust_service')
            customer.customer_location = request.POST.get('cust_location')
            customer.save()
        
        return HttpResponseRedirect('/')
    
@csrf_exempt
def editCustomer(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
         
        if request.method == 'POST':
             
            customerprik = request.POST.get('custa_id')
            customer = customersaccounts.objects.get(id=customerprik)
            customer.customer_name  = request.POST.get('cust_name')
            customer.customer_number = request.POST.get('cust_number')
            customer.customer_tin = request.POST.get('cust_tin')
            customer.customer_website = request.POST.get('cust_website')
            customer.customer_email = request.POST.get('cust_email')
            customer.customer_tel = str(request.POST.get('cust_telephone'))
            customer.customer_type = request.POST.get('cust_type')
            customer.customer_typeofwork = request.POST.get('cust_service')
            customer.customer_location = request.POST.get('cust_location')
            customer.save()
         
        return HttpResponseRedirect('/')
     
@csrf_exempt
def removeCustomer(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
         
        if request.method == 'POST':
             
            customerprik = request.POST.get('customerkey')
            customer = customersaccounts.objects.get(id=customerprik)
            customer.delete()
         
        return HttpResponseRedirect('/')

@csrf_exempt
def getInvoices(request):
    
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try: 
        
            cust_inv = invoice.objects.all().order_by('customerName','invoiceID')
            if 'pattern' in request.POST.keys():
                pattern = request.POST['pattern']
                cust_inv = cust_inv.filter(Q(invoiceID__contains=pattern) | Q(customer_no__icontains=pattern) | Q(customerName__icontains=pattern) | Q(reference__icontains=pattern) | Q(invoice_desc__icontains=pattern) | Q(status__icontains=pattern) | Q(received_by__icontains=pattern)).order_by('customerName','invoiceID')
            arr = []
            
            for inv in cust_inv:
                
                fields = {}
                fields['id'] = inv.id,
                fields['invoiceID'] = inv.invoiceID,
                fields['customerName'] = inv.customerName,
                fields['customer_no'] = inv.customer_no,
                fields['invoice_date'] = inv.invoice_date.__format__('%d-%m-%Y'),
                fields['invoice_due_date'] = inv.invoice_due_date.__format__('%d-%m-%Y'),
                fields['reference'] = inv.reference,
                fields['invoice_desc'] = inv.invoice_desc,
                fields['status'] = inv.status,
                fields['amount_tobe_paid'] = inv.amount_tobe_paid,
                fields['amount_paid'] = inv.amount_paid,
                fields['amount_remaining'] = inv.amount_remaining,
                fields['received_by'] = inv.received_by,
                fields['received_on'] = inv.received_on.__format__('%d-%m-%Y'),
                fields['notes'] = inv.notes,
                fields['currency'] = inv.currency,
                
                mapped = {'fields': fields}
                arr.append(mapped)
                response = {'response': arr}
                print response
            return HttpResponse(json.dumps(response))
        
        except:
            []
#             print 'Unexpected error', sys.exc_info()[0]
#             raise
        
    return HttpResponse('')
@csrf_exempt
def newCustomerInvoice(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        try:
            if request.method == 'POST':
                inv = invoice()
                inv.invoiceID = request.POST.get('customerInvId')
                inv.customer_no = request.POST.get('customerInvNo')
                inv.customerName = request.POST.get('customerName')
                inv.invoice_date = datetime.strptime(request.POST.get('customerInvDate'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.invoice_due_date = datetime.strptime(request.POST.get('customerInvDueDate'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.reference = request.POST.get('customerReference')
                inv.invoice_desc = request.POST.get('customerInvDescri')
                inv.status = request.POST.get('customerStatus')
#                 inv.amount_tobe_paid = request.POST.get('customerAmtToPay')
                inv.amount_paid = request.POST.get('customerAmtPaid')
                inv.amount_remaining = request.POST.get('customerRemAmt')
                inv.received_by = request.POST.get('customerInvReceivedBy')
                inv.received_on = datetime.strptime(request.POST.get('customerInvReceivedOn'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.currency = request.POST.get('customerCurrency')
                print(inv.currency)
                inv.customers_id = 2
                inv.notes = request.POST.get('customerNotes')
                inv.save()
                
#                 print('New Invoice id is ' + inv.id)
                return HttpResponseRedirect('/')
        except:
            print "Unexpected error:", sys.exc_info()[0]
            raise
    return HttpResponse('')

@csrf_exempt
def editCustomerInvoice(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        try:
            if request.method == 'POST':
                edcust_id = request.POST.get('cust_inv_id')
                print edcust_id
                edcust_inv = invoice.objects.get(id=edcust_id)
                edcust_inv.invoiceID = request.POST.get('edcustomerInvId')
                edcust_inv.customer_no = request.POST.get('edcustomerInvNo')
                edcust_inv.customerName = request.POST.get('edcustomerName')
                edcust_inv.invoice_date = datetime.strptime(request.POST.get('edcustomerInvDate'),'%d-%m-%Y').__format__('%Y-%m-%d')
                edcust_inv.invoice_due_date = datetime.strptime(request.POST.get('edcustomerInvDueDate'),'%d-%m-%Y').__format__('%Y-%m-%d')
                edcust_inv.reference = request.POST.get('edcustomerReference')
                edcust_inv.invoice_desc = request.POST.get('edcustomerInvDescri')
                edcust_inv.status = request.POST.get('edcustomerStatus')
                edcust_inv.amount_tobe_paid = request.POST.get('edcustomerAmtToPay')
                edcust_inv.amount_paid = request.POST.get('edcustomerAmtPaid')
                edcust_inv.amount_remaining = request.POST.get('edcustomerRemAmt')
                edcust_inv.received_by = request.POST.get('edcustomerInvReceivedBy')
                edcust_inv.received_on = datetime.strptime(request.POST.get('edcustomerInvReceivedOn'),'%d-%m-%Y').__format__('%Y-%m-%d')
                edcust_inv.currency = request.POST.get('edcustomerCurrency')
                edcust_inv.customers_id = 2
                edcust_inv.notes = request.POST.get('edcustomerNotes')
                edcust_inv.save()
                print 'successful saved line 196'
                return HttpResponseRedirect('/')
        except:
            print "Unexpected error:", sys.exc_info()[0]
            raise
    return HttpResponse('')

@csrf_exempt
def removeCustomerInvoice(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
         
        if request.method == 'POST':
             
            customerinvoiceprik = request.POST.get('customerinvoicekey')
            customerinvoice = invoice.objects.get(id=customerinvoiceprik)
            customerinvoice.delete()
         
        return HttpResponseRedirect('/')
    
@csrf_exempt
def customerItems(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
            
#             if request.method == 'POST':
            cust_Item_pk = request.POST.get('invoicepkCustomer')
            print(cust_Item_pk + ' line 300')
            item = items.objects.filter(invo_connect_id=cust_Item_pk)
#             item = items.objects.all()
            print 'Second Under'
            print item
            arr = []
            print 'Under Me'
                
            for z in item:
            
                fields = {}
                fields['id'] = z.id
                fields['item_descri'] = z.item_desc
                fields['quantity'] = z.Quantity
                fields['unitPrice'] = z.unitPrice_rwf
                fields['excluVat'] = z.total_exclu_VAT
                fields['vatCustomer'] = z.VAT
                fields['totalCustomerItem'] = z.total
                fields['invo_connect_id'] = z.invo_connect_id
                    
                mapped = {'fields': fields}
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
def addCustomerItem(request):
    try:
        if request.method == 'POST':
            item = items()
            item.item_desc = request.POST['description']
            item.Quantity = int(request.POST['quantity'])
            item.unitPrice_rwf = int(request.POST['unit'])
            item.invo_connect_id = int(request.POST['connection'])
            print item.invo_connect_id
            print item.item_desc
            print item.Quantity
            print item.unitPrice_rwf
#             quantity = int(request.POST['quantity'])
#             unit = int(request.POST['quantity'])
            total = item.Quantity * item.unitPrice_rwf
            print total
            vat = int(total * 0.18)
            print vat
            tax_exclu = total - vat
            print tax_exclu
            item.total = total
            item.VAT = vat
            item.total_exclu_VAT = tax_exclu
            item.save()
            item_total_exclu_VAT = items.objects.filter(invo_connect_id=item.invo_connect_id).aggregate(tot=Sum('total_exclu_VAT'))['tot']
            print item_total_exclu_VAT
            item_VAT = items.objects.filter(invo_connect_id=item.invo_connect_id).aggregate(tot=Sum('VAT'))['tot']
            print item_VAT
            item_total = items.objects.filter(invo_connect_id=item.invo_connect_id).aggregate(tot=Sum('total'))['tot']
            print item_total
            inv = invoice.objects.get(id=item.invo_connect_id)
            inv.amount_tobe_paid = item_total
            inv.VAT = item_VAT
            inv.exclu_vat = item_total_exclu_VAT
            inv.save()
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise
    
    return HttpResponse('')


@csrf_exempt
def editCustomerItem(request):
    try:
        if request.method == 'POST':
            kalo = request.POST['item_id']
            item = items.objects.get(id=kalo)
            item.item_desc = request.POST['description']
            item.Quantity = int(request.POST['quantity'])
            item.unitPrice_rwf = int(request.POST['unit'])
            invo_connection = request.POST['connection']
            total = item.Quantity * item.unitPrice_rwf
            vat = int(total * 0.18)
            tax_exclu = total - vat
            item.total = total
            item.VAT = vat
            item.total_exclu_VAT = tax_exclu
            item.save()
            item_total_exclu_VAT = items.objects.filter(invo_connect_id=invo_connection).aggregate(tot=Sum('total_exclu_VAT'))['tot']
            item_VAT = items.objects.filter(invo_connect_id=invo_connection).aggregate(tot=Sum('VAT'))['tot']
            item_total = items.objects.filter(invo_connect_id=invo_connection).aggregate(tot=Sum('total'))['tot']
            inv = invoice.objects.get(id=invo_connection)
            inv.amount_tobe_paid = item_total
            inv.VAT = item_VAT
            inv.exclu_vat = item_total_exclu_VAT
            inv.save()
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise
    
    return HttpResponse('')


@csrf_exempt
def removeCustomerItem(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
             
            if request.method == 'POST':
                 
                customeritemprik = request.POST.get('customeritemkey')
                customeritem = items.objects.get(id=customeritemprik)
                customeritem.delete()
                
                item = items.objects.filter(invo_connect_id=request.POST.get('connection'))
                if item.exists():
                    item_total_exclu_VAT = items.objects.filter(invo_connect_id=request.POST.get('connection')).aggregate(tot=Sum('total_exclu_VAT'))['tot']
                    item_VAT = items.objects.filter(invo_connect_id=request.POST.get('connection')).aggregate(tot=Sum('VAT'))['tot']
                    item_total = items.objects.filter(invo_connect_id=request.POST.get('connection')).aggregate(tot=Sum('total'))['tot']
                    inv = invoice.objects.get(id=request.POST.get('connection'))
                    inv.amount_tobe_paid = item_total
                    inv.VAT = item_VAT
                    inv.exclu_vat = item_total_exclu_VAT
                    inv.save()
                else:
                    inv = invoice.objects.get(id=request.POST.get('connection'))
                    inv.amount_tobe_paid = 0
                    inv.VAT = 0
                    inv.exclu_vat = 0
                    inv.save()
        except:
            print "Unexpected error:", sys.exc_info()[0]
            raise
                
    return HttpResponse('')
        
@csrf_exempt

def report(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
            
            #kat = request.POST['invoicepkCustomer']
            currency = request.GET.get('currency')
            exchangerate = request.GET.get('exchangerate')
            kat = request.GET.get('invoicepkCustomer')
            if currency=='Rwandan Francs':
                infos = invoice.objects.get(id=kat)
                print(str(infos) + ' line413')
                fields = {}
                fields['invid'] = infos.invoiceID
                fields['customerN'] = infos.customer_no
                fields['reference'] = infos.reference
                fields['customerName'] = infos.customerName
                fields['invoice_desc'] = infos.invoice_desc
                fields['invoice_date'] = infos.invoice_date.__format__('%d/%m/%Y')
                fields['invoice_due_date'] = infos.invoice_due_date.__format__('%d/%m/%Y')
                fields['amount_tobe_paid'] = infos.amount_tobe_paid
                fields['exclu_vat'] = infos.exclu_vat
                fields['VAT'] = infos.VAT
                        
                    
        #             item_total = items.objects.filter(invo_connect_id=1).aggregate(tot=Sum('total'))['tot']
                    
        #             print item_total
                    
                
                        
                   
                resp = HttpResponse(mimetype='application/pdf')
                report = invoicepdf()
                    
                    
        #             tax_vat = int(fields['amount_tobe_paid']*(0.18))
        #             tax_exclu = (fields['amount_tobe_paid'] - tax_vat)
        
        #             tax_vat = int(item_total * 0.18)
        #             tax_exclu = int(item_total - tax_vat)
                    
        #             print tax_vat
        #             print tax_exclu
                    
                report.band_begin.elements[1].text = fields['invid']
                report.band_begin.elements[1].text
                report.band_begin.elements[4].text = fields['customerN']
                report.band_begin.elements[6].text = fields['reference']
                report.band_begin.elements[8].text = fields['customerName']
                report.band_begin.elements[10].text = fields['invoice_desc']
                report.band_begin.elements[12].text = str(fields['invoice_date'])
                report.band_begin.elements[14].text = str(fields['invoice_due_date'])
                    
                report.band_summary.elements[12].text = '{:,}'.format(fields['exclu_vat'])
                report.band_summary.elements[16].text = '{:,}'.format(fields['VAT'])
                report.band_summary.elements[20].text = '{:,}'.format(fields['amount_tobe_paid'])
                
                
                item = items.objects.filter(invo_connect_id=kat)
                print 'btn'
                print item
                arr = []
                n = 0
                for x in item:
                    n+=1
                    value = {}
                    value['number'] = n
                    value['Item_desc'] = x.item_desc
                    value['Quantity'] = '{:,}'.format(x.Quantity)
                    value['unitPrice_rwf'] = '{:,}'.format(x.unitPrice_rwf)
                    value['total'] = '{:,}'.format(x.total)
                    
                    arr.append(value)  
                    print arr
                    print 'after array'
                          
    #                 take = value['item_desc']
    #                 print take
                    
                    report_invoice = invoicepdf(queryset=arr)
        #             canvas = report_invoice.generate_by(PDFGenerator, filename=resp,
        #                                             return_canvas=True
        #                                                      )
                report_invoice.generate_by(PDFGenerator, filename=resp)
                
                return resp
            else:
                infos = invoice.objects.get(id=kat)
                print(str(infos) + ' line413')
                fields = {}
                fields['invid'] = infos.invoiceID
                fields['customerN'] = infos.customer_no
                fields['reference'] = infos.reference
                fields['customerName'] = infos.customerName
                fields['invoice_desc'] = infos.invoice_desc
                fields['invoice_date'] = infos.invoice_date.__format__('%d/%m/%Y')
                fields['invoice_due_date'] = infos.invoice_due_date.__format__('%d/%m/%Y')
                fields['amount_tobe_paid'] = infos.amount_tobe_paid
                fields['exclu_vat'] = infos.exclu_vat
                fields['VAT'] = infos.VAT
                        
                    
        #             item_total = items.objects.filter(invo_connect_id=1).aggregate(tot=Sum('total'))['tot']
                    
        #             print item_total
                    
                
                        
                   
                resp = HttpResponse(mimetype='application/pdf')
                report = invoicepdfdollar()
                    
                    
        #             tax_vat = int(fields['amount_tobe_paid']*(0.18))
        #             tax_exclu = (fields['amount_tobe_paid'] - tax_vat)
        
        #             tax_vat = int(item_total * 0.18)
        #             tax_exclu = int(item_total - tax_vat)
                    
        #             print tax_vat
        #             print tax_exclu
                    
                report.band_begin.elements[1].text = fields['invid']
                report.band_begin.elements[1].text
                report.band_begin.elements[4].text = fields['customerN']
                report.band_begin.elements[6].text = fields['reference']
                report.band_begin.elements[8].text = fields['customerName']
                report.band_begin.elements[10].text = fields['invoice_desc']
                report.band_begin.elements[12].text = str(fields['invoice_date'])
                report.band_begin.elements[14].text = str(fields['invoice_due_date'])
                    
                report.band_summary.elements[12].text = '$'+'{:,}'.format(fields['amount_tobe_paid'])
                report.band_summary.elements[16].text = '{:,}'.format(float(exchangerate))
                report.band_summary.elements[20].text = '{:,}'.format(int((fields['amount_tobe_paid'])*float(exchangerate)))
                report.band_summary.elements[24].text = '{:,}'.format(int((fields['amount_tobe_paid'])*float(exchangerate)*0.18))
                report.band_summary.elements[28].text = '{:,}'.format(int(((fields['amount_tobe_paid'])*float(exchangerate))+((fields['amount_tobe_paid'])*float(exchangerate)*0.18)))
                
                item = items.objects.filter(invo_connect_id=kat)
                print 'btn'
                print item
                arr = []
                n = 0
                for x in item:
                    n+=1
                    value = {}
                    value['number'] = n
                    value['Item_desc'] = x.item_desc
                    value['Quantity'] = '{:,}'.format(x.Quantity)
                    value['unitPrice_rwf'] = "$"+str('{:,}'.format(x.unitPrice_rwf))+" Per Month"
                    value['total'] = "$"+str('{:,}'.format(x.total))
                    
                    arr.append(value)  
                    print arr
                    print 'after array'
                          
    #                 take = value['item_desc']
    #                 print take
                    
                    report_invoice = invoicepdfdollar(queryset=arr)
        #             canvas = report_invoice.generate_by(PDFGenerator, filename=resp,
        #                                             return_canvas=True
        #                                                      )
                report_invoice.generate_by(PDFGenerator, filename=resp)
                
                return resp
        except:
#             []
            print "Unexpected error:", sys.exc_info()[0]
            raise
    return HttpResponse('No data provided')
            

            