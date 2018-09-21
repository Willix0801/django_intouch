from django.conf.urls import patterns, include, url
from customers.views import *
urlpatterns = patterns(
                       
                       'customers.views',
                       (r'^getcustomers$', getCustomers),
                       (r'^addcustomer$', addCustomer),
                       (r'^editcustomer$', editCustomer),
                       (r'^removecustomer$', removeCustomer),
                       (r'^getinvoices$', getInvoices),
                       (r'^addnewcustomerinvoice$', newCustomerInvoice),
                       (r'^editcustomerinvoice$', editCustomerInvoice),
                       (r'^removecustomerinvoice$', removeCustomerInvoice),
                       (r'^getcustomeritems$', customerItems),
                       (r'^report$', report),
                       (r'^addcustomeritem$', addCustomerItem),
                       (r'^editcustomeritem$', editCustomerItem),
                       (r'^removecustomeritem$', removeCustomerItem),
                       
                       
                       

)