from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import Http404

from .serializers import LetterSerializer
from .models import Letter
from django.core.mail import EmailMessage

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
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 유저에게 온 모든 편지 보기
# BASEURL/letter/getMyLetters/{id}
@api_view(['GET'])
def getMyLetters(request, param):
    print(param)
    # 등록된 유저의 id인지 확인하기
    letters = Letter.objects.filter(recipient=param)
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