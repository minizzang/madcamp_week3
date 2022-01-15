from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import Http404

from .serializers import LetterSerializer
from .models import Letter
from django.core.mail import EmailMessage
from django.db.models import Q
import datetime

# 모든 편지 보기 (개발용)
@api_view(['GET'])
def getLetters(request):
    letters = Letter.objects.all()

    serializer = LetterSerializer(letters, many=True)
    return Response(serializer.data)


# 편지 쓰기
@api_view(['POST'])
def postLetter(request):
    serializer = LetterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response("post succeed")
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# (open_date가 지난) 유저에게 온 모든 편지 보기
# BASEURL/letter/getMyValidLetters/{id}
@api_view(['GET'])
def getMyValidLetters(request, param):
    print(param)
    # 등록된 유저의 id인지 확인하기
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=param) & Q(open_date__lte = date_now))
    if (len(letters)==0) :
        return Response("편지가 없어요")
    serializer = LetterSerializer(letters, many=True)
    return Response(serializer.data)


# (open_date가 지나지 않은) 유저에게 온 모든 편지 보기
# BASEURL/letter/getMyInvalidLetters/{id}
@api_view(['GET'])
def getMyInvalidLetters(request, param):
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=param) & Q(open_date__gt = date_now))
    if (len(letters)==0) :
        return Response("편지가 없어요")
    serializer = LetterSerializer(letters, many=True)
    return Response(serializer.data)
    

# 메일 보내기 test
# @api_view(['GET'])
# def sendEmail(request):
#     email = EmailMessage(
#         '안녕~~~',
#         '나는 미니다',
#         to=['ehtj123@gmail.com']
#     )
#     email.send()
#     return Response(status=status.HTTP_200_OK)