from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import getLetters, postLetter, getMyLetters

urlpatterns = [
    # path('', LetterList.as_view()),
    path('getLetters', getLetters),
    path('postLetter', postLetter),
    path('getMyLetters/<str:param>', getMyLetters),
    # path('sendEmail', sendEmail),
]

urlpatterns = format_suffix_patterns(urlpatterns)