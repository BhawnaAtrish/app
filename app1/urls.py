from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('all/',views.all, name='all'),
    path('saving/',views.saving)
]
