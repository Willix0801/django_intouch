from django.conf.urls import patterns, include, url
from admin.views import *
urlpatterns = patterns(
                       
                       'admin.views',
                       (r'^getusers$', getusers),
                       (r'^addUserfunc$', addUser),
                       (r'^editUserfunc$', editUser),
                       (r'^removeUserfunc$', delUser),
                       (r'^report$', report),
                       (r'^getUserProfile$', userProfile),
                       
                       

)