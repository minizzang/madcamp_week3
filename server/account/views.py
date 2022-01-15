from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status
from django.contrib.auth.hashers import check_password


# return Response(serializer.data, status=status.HTTP_201_CREATED)
# return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 회원가입
# class UserCreate(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# 모든 유저 확인 (개발용)
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# 회원가입
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.filter(email = serializer.data["email"])
        return Response(user[0].id)         #처음 회원가입 시에는 id 리턴함.
    elif (serializer.errors["email"][0] == "user with this email already exists.") :    # error에 email 항목이 없는 경우 처리?
        return Response("duplicated email") # 이미 등록된 이메일의 경우
    return Response(serializer.errors)


# 로그인
@api_view(['POST'])
def login(request):
    user = User.objects.filter(email = request.data['email'])
    print(len(user))
    if len(user)==1:
        if check_password(request.data['password'], user[0].password):  #id로 유저 아이디 접근 가능
            return Response(user[0].id)     # 로그인 시 id 리턴
        return Response("wrong passwd")     # 이메일은 있는데 pw가 맞지 않음.
    return Response("wrong email")          # 등록되지 않은 email
    

# 유저 닉네임, 메모 가져오기
@api_view(['GET'])
def getUserInfo(request, param):
    user = User.objects.filter(id=param).values('nickname', 'memo')
    return Response(user)


# 메모 변경하기
@api_view(['POST'])
def updateUserMemo(request):
    user = User.objects.get(id=request.data['id'])
    user.memo = request.data['memo']
    user.save()
    
    return Response("memo updated")


# 유효한 user의 id인지 확인
# @api_view(['GET'])
# def 