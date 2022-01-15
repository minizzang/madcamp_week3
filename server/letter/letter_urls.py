from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import getLetters, postLetter, getMyValidLetters, getMyInvalidLetters

urlpatterns = [
    # path('', LetterList.as_view()),
    path('getLetters', getLetters),
    path('postLetter', postLetter),
    path('getMyValidLetters/<str:param>', getMyValidLetters),
    path('getMyInvalidLetters/<str:param>', getMyInvalidLetters),
    # path('sendEmail', sendEmail),
]

urlpatterns = format_suffix_patterns(urlpatterns)