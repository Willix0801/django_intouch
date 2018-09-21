from django.db import models

# Create your models here.

#accounts
class suppliers_accounts(models.Model):
    supplier_name = models.CharField(max_length=100, null=False)
    supplier_type = models.CharField(max_length=100, null=True)
    supplier_service = models.TextField(max_length=1000, null=True)
    supplier_location = models.TextField(max_length=10000, null=True)
    supplier_tel = models.CharField(max_length=1000, null=True)
    supplier_email = models.EmailField(max_length=10000, null=True)
    supplier_tin = models.IntegerField(max_length=225, null=False)
    supplier_website = models.CharField(max_length=1000, null=True)
    supplier_bank_name = models.CharField(max_length=1000, null=True)
    suppler_bank_account_num = models.CharField(max_length=1000, null=True)
    supp_notes = models.CharField(max_length=1000, null=True)
    
    def __str__(self):
        return self.supplier_name    
    
#Invoices

class suppliersinvoice(models.Model):
    invoiceID = models.CharField(max_length=10000, null=False)  # or Bill Number
    supplier_name = models.CharField(max_length=10000, null=False)
    SDCID = models.CharField(max_length=10000, null=True) # Optional
    reference = models.CharField(max_length=10000, null=True)
    description = models.TextField(max_length=100000, null=True)
    status = models.CharField(max_length=1000, null=False)
    Package = models.CharField(max_length=10000, null=True) # Mainly used or received from MTN
    amount_tobe_paid = models.IntegerField(max_length=1000, null=False)
    amount_paid = models.IntegerField(max_length=1000, null=True)
    amount_remaining = models.IntegerField(max_length=1000, null=True)
    invoice_date = models.DateTimeField()
    invoice_due_date = models.DateTimeField()
    supp_notes = models.CharField(max_length=1000, null=True)
    supp_service_id = models.CharField(max_length=1000, null=True) # optional
    suppliers = models.ForeignKey(suppliers_accounts)
    received_on = models.DateTimeField()
    
    def __str__(self):
        return self.supplier_name

class items(models.Model):
    item_desc = models.TextField(max_length=225, null=False)
    Quantity = models.IntegerField(max_length=225, null=False)
    unitPrice_rwf = models.IntegerField(max_length=225, null=False)
    total_exclu_VAT = models.IntegerField(max_length=225, null=False)
    VAT = models.IntegerField(max_length=225, null=False)
    total = models.IntegerField(max_length=225, null=False)
    suppliers = models.ForeignKey(suppliersinvoice)
    
    def __str__(self):
        return self.item_desc