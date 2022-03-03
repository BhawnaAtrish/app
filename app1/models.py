from msilib import Table
from msilib.schema import Class
from django.db import models

# Create your models here.
class Movies_data(models.Model):
    Title=models.models.CharField(max_length=50)

