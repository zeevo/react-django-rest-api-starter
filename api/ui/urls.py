from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.http import HttpResponse
from . import views


urlpatterns = [
    path('', views.index),
    url(r'^.*$', views.redirect_to_index)
]
