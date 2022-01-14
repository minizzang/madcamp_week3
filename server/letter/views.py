from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializers import LetterSerializer
from .models import Letter

class LetterList(APIView):
    def get(self, request):
        letters = Letter.objects.all()

        serializer = LetterSerializer(letters, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LetterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)