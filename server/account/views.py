from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from django.contrib.auth.hashers import check_password

# 회원가입
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# 모든 유저 확인용
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

# 회원가입 (여기서 이메일 중복확인 해야함??)
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 로그인
@api_view(['POST'])
def login(request):
    user = User.objects.filter(email = request.data['email'])
    print(len(user))
    if len(user)==1:
        if check_password(request.data['password'], user[0].password):
            return Response("correct passwd")
        return Response("wrong passwd")
    return Response("wrong email!!")
    
# 이메일 중복 확인