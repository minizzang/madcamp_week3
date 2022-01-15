from rest_framework import serializers
from .models import Letter

class LetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Letter
        fields = ('recipient', 'author', 'title', 'text', 'open_date', 'opened')