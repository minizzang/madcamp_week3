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
def getAllLetters(request):
    letters = Letter.objects.all()

    serializer = LetterSerializer(letters, many=True)
    return Response(serializer.data)


# 편지 쓰기
# client에서 post 보낼 때 opened = False로 보내기
@api_view(['POST'])
def postLetter(request):
    serializer = LetterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response("post succeed")
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# (open_date가 지난 && opened = False인) 유저에게 온 모든 편지 보기
# BASEURL/letter/getMyValidLetters/{id}
@api_view(['GET'])
def getMyValidLetters(request, param):
    # 등록된 유저의 id인지 확인하기 ??
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=param) & Q(open_date__lte = date_now) & Q(opened = False)).values().order_by('-open_date')
    if (len(letters)==0) :
        return Response("편지가 없어요")
    # serializer = LetterSerializer(letters, many=True)
    return Response(letters)


# (open_date가 지나지 않은) 유저에게 온 편지의 닉네임, open_date 받기
# BASEURL/letter/getMyInvalidLetters/{id}
@api_view(['GET'])
def getMyInvalidLetters(request, param):
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=param) & Q(open_date__gt = date_now)).values('author', 'open_date').order_by('-open_date')
    if (len(letters)==0) :
        return Response("편지가 없어요")
    return Response(letters)


# (타인용) 유저에게 온 편지의 닉네임, open_date 받기
# BASEURL/letter/getLetters/{id}
@api_view(['GET'])
def getLetters(request, param):
    letters = Letter.objects.filter(Q(recipient=param) & Q(opened = False)).values('author', 'open_date')
    if (len(letters)==0) :
        return Response("편지가 없어요")
    return Response(letters)


# 편지 열었을 때 opened 상태 변경하기
@api_view(['POST'])
def setOpened(request):
    letter = Letter.objects.get(id = request.data['id'])
    letter.opened = True
    letter.save()

    return Response("opened True")

# (open_date가 지난 && opened = True인) 유저에게 온 모든 편지 보기
# BASEURL/letter/getSavedLetters/{id}
@api_view(['GET'])
def getSavedLetters(request, param):
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=param) & Q(open_date__lte = date_now) & Q(opened = True)).values()
    if (len(letters)==0) :
        return Response("편지가 없어요")
    # serializer = LetterSerializer(letters, many=True)
    return Response(letters)

# (open_date가 지난 && opened = True인 && year, month 조건에 따른) 유저에게 온 모든 편지 보기
# BASEURL/letter/getSavedLettersDetail/{id}
@api_view(['GET'])
def getSavedLettersDetail(request, id, year, month):
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')
    letters = Letter.objects.filter(Q(recipient=id) & Q(open_date__year=year) & Q(open_date__month = month) & Q(opened = True)).values().order_by('-open_date')
    if (len(letters)==0) :
        return Response("편지가 없어요")
    # serializer = LetterSerializer(letters, many=True)
    return Response(letters)
    

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