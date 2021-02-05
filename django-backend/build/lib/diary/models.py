from django.db import models
from django.conf import settings
import json

# Create your models here.
class Today(models.Model):
    # owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    date = models.DateField()
    title = models.CharField(max_length=100, default='')
    weather = models.CharField(max_length=100, default='')
    keywords = models.CharField(max_length=100, default='')
    body = models.TextField()
    
    def __str__(self):
        return f"({self.weather})[{self.title}] k:{self.keywords}"


class Transaction(models.Model):
    # owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    date = models.DateField()
    title = models.CharField(max_length=100, default='')
    category = models.CharField(max_length=100, default='')
    price = models.IntegerField()
    
    def __str__(self):
        return f"({self.date})[{self.title}] k:{self.category} {self.price}"