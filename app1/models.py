from distutils.command.upload import upload
from msilib import Table
from msilib.schema import Class
from django.db import models


# Create your models here.
class Movies_data(models.Model):
    title=models.CharField(max_length=50,null=True)
    year=models.CharField(max_length=10,null=True)
    rated=models.CharField(max_length=50,null=True)
    released=models.CharField(max_length=10,null=True)
    runtime=models.CharField(max_length=10,null=True)
    genre=models.CharField(max_length=10,null=True)
    director=models.CharField(max_length=10,null=True)
    writer=models.CharField(max_length=10,null=True)
    actor= models.TextField(null=True)
    plot=models.CharField(max_length=10,null=True)
    poster=models.CharField(max_length=100,null=True)
    iratings=models.CharField(max_length=10,null=True)
    ivotes=models.CharField(max_length=10,null=True)

    def __str__(self):
        return self.title
    