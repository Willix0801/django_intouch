from django.contrib.auth.models import User
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from suppliers.models import *
from django.db.models import Q
import json
import sys
from django.core.serializers.json import DjangoJSONEncoder
from django.core.exceptions import ValidationError
from datetime import datetime


@csrf_exempt
def getSuppliers(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
            
            suppliers = suppliers_accounts.objects.all().order_by('supplier_name', 'supplier_service')
            if 'pattern' in request.POST.keys():
                pattern = request.POST['pattern']
                suppliers = suppliers.filter(Q(supplier_name__icontains=pattern) | Q(supplier_type__icontains=pattern) | Q(supplier_service__icontains=pattern) | Q(supplier_location__icontains=pattern) | Q(supplier_tel__icontains=pattern) | Q(supplier_email__icontains=pattern) | Q(supplier_tin__icontains=pattern) | Q(supplier_website__icontains=pattern) | Q(supplier_bank_name__icontains=pattern) | Q(suppler_bank_account_num__icontains=pattern)).order_by('supplier_name', 'supplier_service')
            arr = []
            for supplier in suppliers:
                fields = {}
                fields['id'] = supplier.id,
                fields['name'] = supplier.supplier_name,
                fields['type'] = supplier.supplier_type,
                fields['service'] = supplier.supplier_service,
                fields['location'] = supplier.supplier_location,
                fields['telephone'] = supplier.supplier_tel,
                fields['email'] = supplier.supplier_email,
                fields['tin'] = supplier.supplier_tin,
                fields['website'] = supplier.supplier_website,
                fields['bank_name'] = supplier.supplier_bank_name,
                fields['bank_account'] = supplier.suppler_bank_account_num,
                fields['notes'] = supplier.supp_notes
                
                mapped = {'fields': fields}
                print mapped
                arr.append(mapped)
                response = {'response': arr}
            return HttpResponse(json.dumps(response))
        except:
            []
    return HttpResponse('')

@csrf_exempt
def addSupplier(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        if request.method == 'POST':
            supplier = suppliers_accounts()
            supplier.supplier_name = request.POST.get('supp_name')
            supplier.supplier_type = request.POST.get('supp_type')
            supplier.supplier_service = request.POST.get('supp_service')
            supplier.supplier_location = request.POST.get('supp_location')
            supplier.supplier_tel = request.POST.get('supp_tele')
            supplier.supplier_email = request.POST.get('supp_mail')
            supplier.supplier_tin = request.POST.get('supp_tin')
            supplier.supplier_website = request.POST.get('supp_website')
            supplier.supplier_bank_name = request.POST.get('supp_bank_name')
            supplier.suppler_bank_account_num = request.POST.get('supp_bank_account')
            supplier.supp_notes = request.POST.get('supp_notes')
            supplier.save()
    return HttpResponseRedirect('/')

@csrf_exempt
def editSupplier(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        if request.method == 'POST':
            supp_prk = request.POST.get('edsupp_prik')
            edsupplier = suppliers_accounts.objects.get(id=supp_prk)
            edsupplier.supplier_name = request.POST.get('edsupp_name')
            edsupplier.supplier_type = request.POST.get('edsupp_type')
            edsupplier.supplier_service = request.POST.get('edsupp_service')
            edsupplier.supplier_location = request.POST.get('edsupp_location')
            edsupplier.supplier_tel = request.POST.get('edsupp_tele')
            edsupplier.supplier_email = request.POST.get('edsupp_mail')
            edsupplier.supplier_tin = request.POST.get('edsupp_tin')
            edsupplier.supplier_website = request.POST.get('edsupp_website')
            edsupplier.supplier_bank_name = request.POST.get('edsupp_bank_name')
            edsupplier.suppler_bank_account_num = request.POST.get('edsupp_bank_account')
            edsupplier.supp_notes = request.POST.get('edsupp_notes')
            edsupplier.save()
    return HttpResponseRedirect('/')

@csrf_exempt
def removeSupplier(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
         
        if request.method == 'POST':
             
            supplierprik = request.POST.get('supplierkey')
            supplier = suppliers_accounts.objects.get(id=supplierprik)
            supplier.delete()
         
    return HttpResponseRedirect('/')

@csrf_exempt
def getSuppliersInvoices(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
        try:
            supplier_invoice = suppliersinvoice.objects.all().order_by('invoiceID', 'supplier_name')
            if 'pattern' in request.POST.keys():
                pattern = request.POST['pattern']
                supplier_invoice = supplier_invoice.filter(Q(invoiceID__icontains=pattern) | Q(supplier_name__icontains=pattern) | Q(SDCID__icontains=pattern) | Q(reference__icontains=pattern) | Q(description__icontains=pattern) | Q(status__icontains=pattern) | Q(Package__icontains=pattern) | Q(amount_tobe_paid__icontains=pattern) | Q(amount_paid__icontains=pattern) | Q(amount_remaining__icontains=pattern) | Q(supp_notes__icontains=pattern) | Q(supp_service_id__icontains=pattern)).order_by('invoiceID', 'supplier_name')
            
            arr = []
            for invoice in supplier_invoice:
                fields = {}
                fields['id'] = invoice.id
                fields['invoiceID'] = invoice.invoiceID
                fields['I_supplier_name'] = invoice.supplier_name
                fields['I_SDCID'] = invoice.SDCID
                fields['I_reference'] = invoice.reference
                fields['I_description'] = invoice.description
                fields['I_status'] = invoice.status
                fields['I_package'] = invoice.Package
                fields['I_amount_tobepaid'] = invoice.amount_tobe_paid
                fields['I_amountpaid'] = invoice.amount_paid
                fields['I_amountremaining'] = invoice.amount_remaining
                fields['I_invoicedate'] = invoice.invoice_date.__format__('%d-%m-%Y')
                fields['I_invoiceduedate'] = invoice.invoice_due_date.__format__('%d-%m-%Y')
                fields['I_suppnotes'] = invoice.supp_notes
                fields['I_supp_service_id'] = invoice.supp_service_id
                fields['I_receivedon'] = invoice.invoice_due_date.__format__('%d-%m-%Y')
                fields['I_suppliers_id'] = 1 
                
                mapped = {'fields': fields}
                print mapped
                arr.append(mapped)
                response = {'response': arr}
            return HttpResponse(json.dumps(response))
        except:
            []
#             print 'Unexpected error', sys.exc_info()[0]
#             raise
    return HttpResponse('')

@csrf_exempt
def newSupplierInvoice(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        try:
            if request.method == 'POST':
                inv = suppliersinvoice()
                inv.invoiceID = request.POST.get('supplierInvId')
                inv.supplier_name = request.POST.get('supplierName')
                inv.SDCID = request.POST.get('supplierSDCID')
                inv.invoice_date = datetime.strptime(request.POST.get('supplierInvDate'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.invoice_due_date = datetime.strptime(request.POST.get('supplierInvDueDate'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.reference = request.POST.get('supplierReference')
                inv.status = request.POST.get('supplierStatus')
                inv.amount_tobe_paid = request.POST.get('supplierAmtToPay')
                inv.amount_paid = request.POST.get('supplierAmtPaid')
                inv.amount_remaining = request.POST.get('supplierRemAmt')
                inv.Package = request.POST.get('supplierPackage')
                inv.received_on = datetime.strptime(request.POST.get('supplierInvReceivedOn'),'%d/%m/%Y').__format__('%Y-%m-%d')
                inv.supp_service_id = request.POST.get('supplierServiceID')
                inv.description = request.POST.get('supplierInvDescri')
                inv.supp_notes = request.POST.get('supplierNotes')
                inv.suppliers_id = 2
                inv.save()
                print 'successful saved line 156'
                return HttpResponseRedirect('/')
        except:
            print "Unexpected error:", sys.exc_info()[0]
            raise
    return HttpResponse('')

@csrf_exempt
def editSupplierInvoice(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('login')
    else:
        try:
            if request.method == 'POST':
                inv_identity = request.POST.get('supp_inv_ID')
                inv = suppliersinvoice.objects.get(id=inv_identity)
                inv.invoiceID = request.POST.get('supplierInvId')
                inv.supplier_name = request.POST.get('supplierName')
                inv.SDCID = request.POST.get('supplierSDCID')
                inv.invoice_date = datetime.strptime(request.POST.get('supplierInvDate'),'%d-%m-%Y').__format__('%Y-%m-%d')
                inv.invoice_due_date = datetime.strptime(request.POST.get('supplierInvDueDate'),'%d-%m-%Y').__format__('%Y-%m-%d')
                inv.reference = request.POST.get('supplierReference')
                inv.status = request.POST.get('supplierStatus')
                inv.amount_tobe_paid = request.POST.get('supplierAmtToPay')
                inv.amount_paid = request.POST.get('supplierAmtPaid')
                inv.amount_remaining = request.POST.get('supplierRemAmt')
                inv.Package = request.POST.get('supplierPackage')
                inv.received_on = datetime.strptime(request.POST.get('supplierInvReceivedOn'),'%d-%m-%Y').__format__('%Y-%m-%d')
                inv.supp_service_id = request.POST.get('supplierServiceID')
                inv.description = request.POST.get('supplierInvDescri')
                inv.supp_notes = request.POST.get('supplierNotes')
                inv.suppliers_id = 2
                inv.save()
                print 'successful saved line 156'
                return HttpResponseRedirect('/')
        except:
            print "Unexpected error:", sys.exc_info()[0]
            raise
    return HttpResponse('')

@csrf_exempt
def removeSupplierInvoice(request):
     
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login')
    else:
         
        if request.method == 'POST':
            supplierinv_prik = request.POST.get('supplierinv_key')
            supplier = suppliersinvoice.objects.get(id=supplierinv_prik)
            supplier.delete()
         
    return HttpResponseRedirect('/')
