from django.db import models

# Create your models here.

# the models below will be of two types information
# one, information about the company Intouch
# two, end user information

# Intouch

class intouchInfo(models.Model):
    name = models.CharField(max_length=100, null=False)
    type = models.CharField(max_length=100, null=False)
    description = models.TextField(max_length=10000, null=False)
    location = models.TextField(max_length=10000, null=False)
    telphone = models.TextField(max_length=10000, null=False)
    TIN = models.IntegerField(max_length=100, null=False)
    
    def __str__(self):
        return self.name
    
class paymentsInfo(models.Model):
    bank_name = models.CharField(max_length=100, null=False)
    account_name = models.CharField(max_length=100, null=False)
    account_no = models.IntegerField(max_length=100, null=False)
    location = models.CharField(max_length=100, null=False)
    currency = models.CharField(max_length=100, null=False)
    
    def __str__(self):
        return self.bank_name
    
class paymentmodes(models.Model):
    mode1 = models.CharField(max_length=100, null=False)
    mode2 = models.CharField(max_length=100, null=False)
    mode3 = models.CharField(max_length=100, null=False)
    mode4 = models.CharField(max_length=100, null=False)
    notes = models.TextField(max_length=10000, null=False)
    
    def __str__(self):
        return self.mode1
 
class customersaccounts(models.Model):
    customer_name = models.CharField(max_length=100, null=False)
    customer_number = models.CharField(max_length=100, null=False)
    customer_type = models.TextField(max_length=1000, null=True)
    customer_location = models.TextField(max_length=10000, null=True)
    customer_tel = models.CharField(max_length=10000, null=True)
    customer_email = models.EmailField(max_length=10000, null=True)
    customer_typeofwork = models.CharField(max_length=10000, null=True)
    customer_tin = models.CharField(max_length=225, null=True)
    customer_website = models.CharField(max_length=1000, null=True)
    
    def __str__(self):
        return self.customer_name    
    
# Invoicing 
class invoice(models.Model):
    invoiceID = models.CharField(max_length=10000, null=False)
    customer_no = models.CharField(max_length = 10000, null=False)
    customerName = models.CharField(max_length=10000, null=False)
    invoice_date = models.DateTimeField()
    invoice_due_date = models.DateTimeField()
    reference = models.CharField(max_length=10000, null=False)
    invoice_desc = models.TextField(max_length=100000, null=False)
    status = models.CharField(max_length=1000, null=False)
    amount_tobe_paid = models.IntegerField(max_length=1000, null=False)
    amount_paid = models.IntegerField(max_length=1000, null=True)
    amount_remaining = models.IntegerField(max_length=1000, null=True)
    received_by = models.CharField(max_length=1000, null=True)
    received_on = models.DateTimeField()
    currency = models.CharField(max_length=225, default='No Currency Provided')
    customers = models.ForeignKey(customersaccounts)
    notes = models.TextField(max_length=100000, null=True)
    VAT = models.IntegerField(max_length=15, null=True, default='0')
    exclu_vat = models.IntegerField(max_length=15, null=True, default='0')
    
    def __str__(self):
        return self.customerName
    
class items(models.Model):
    item_desc = models.TextField(max_length=10000, null=False)
    Quantity = models.IntegerField(max_length=1000000000000, null=False)
    unitPrice_rwf = models.IntegerField(max_length=10000, null=False)
    total_exclu_VAT = models.IntegerField(max_length=10000000000, null=False)
    VAT = models.IntegerField(max_length=10000000000, null=False)
    total = models.IntegerField(max_length=10000000000, null=False)
    invo_connect = models.ForeignKey(invoice)
    
    def __str__(self):
        return self.item_desc
    



