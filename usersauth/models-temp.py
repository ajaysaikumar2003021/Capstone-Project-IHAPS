from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    
    def __str__(self):
        return self.title

# class CustomUser(AbstractUser):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255)
#     password = models.CharField(max_length=255)
#     permissions = models.CharField(max_length=255)