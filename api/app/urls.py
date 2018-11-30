from django.urls import path

from .views import HelloWorldView

urlpatterns = [
    path('title', HelloWorldView.as_view(), name='index'),
]
