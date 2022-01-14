from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import getLetters, postLetter

urlpatterns = [
    # path('', LetterList.as_view()),
    path('getLetters', getLetters),
    path('postLetter', postLetter),
]

urlpatterns = format_suffix_patterns(urlpatterns)