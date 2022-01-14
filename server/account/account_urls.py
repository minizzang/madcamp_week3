from django.urls import path, include
from . import views
from rest_framework import urls
from .views import getUsers, signup, login

urlpatterns = [
    # path('signup', views.UserCreate.as_view()),
    path('api-auth', include('rest_framework.urls')),
    path('getUsers', getUsers),
    path('signup', signup),
    path('login', login),
]