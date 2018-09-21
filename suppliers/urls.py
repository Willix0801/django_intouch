from django.conf.urls import patterns, include, url
from suppliers.views import *
urlpatterns = patterns(
                       
                       'suppliers.views',
                       (r'^getsuppliers$', getSuppliers),
                       (r'^addsupplier$', addSupplier),
                       (r'^editsupplier$', editSupplier),
                       (r'^removesupplier$', removeSupplier),
                       (r'^getsuppliersinvoices$', getSuppliersInvoices),
                       (r'^addsupplierinvoice$', newSupplierInvoice),
                       (r'^editsupplierinvoice$', editSupplierInvoice),
                       (r'^removesupplierinvoice$', removeSupplierInvoice)
                       
                       
                       

)