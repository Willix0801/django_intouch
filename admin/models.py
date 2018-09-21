from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model):   
    
    user = models.ForeignKey(User) 
    title= models.CharField(max_length=1000, null=True)
    homephone = models.CharField(max_length=15, null=True)
    mobilephone = models.CharField(max_length=15, null=True)   
    businessphone = models.CharField(max_length=15, null=True)
    webpage = models.CharField(max_length=30, null=True)
    skype= models.CharField(max_length=50, null=True)
    businessaddress= models.CharField(max_length=400, null=True)
    homeaddress = models.CharField(max_length=400, null=True)   
    
    def __str__(self):
        return self.title
    

class Role(models.Model):
    role_name = models.CharField(max_length=500, null=True)
    role_description = models.CharField(max_length=500, null=True)
    user_connection = models.ForeignKey(User, null=True)

class modulepermissions(models.Model):
    modulename = models.CharField(max_length=500, null=False)
    view = models.BooleanField()
    add = models.BooleanField()
    edit = models.BooleanField()
    delete = models.BooleanField()
    role_connection = models.ForeignKey(Role, null=True)
