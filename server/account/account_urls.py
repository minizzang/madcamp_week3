from django.urls import path, include
from . import views
from rest_framework import urls
from .views import getUsers, signup, login, getUserInfo, updateUserMemo

urlpatterns = [
    # path('signup', views.UserCreate.as_view()),
    path('api-auth', include('rest_framework.urls')),
    path('getUsers', getUsers),
    path('signup', signup),
    path('login', login),
    path('getUserInfo/<str:param>', getUserInfo),
    path('updateUserMemo', updateUserMemo),
]