from django.conf.urls import patterns, include, url
from main.views import *
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'intouch.views.home', name='home'),
    # url(r'^intouch/', include('intouch.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    
    (r'^$',index),
    (r'^login', login),
    (r'^logi', login_user),
    (r'^logout', logout),
    (r'^getUserNames', getUserNames),
    (r'^admin/', include('admin.urls')),
    (r'^customers/', include('customers.urls')),
    (r'^suppliers/', include('suppliers.urls'))
    
)
