from django.db import models

# Create your models here.

class User(models.Model):
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)
    email = models.EmailField()