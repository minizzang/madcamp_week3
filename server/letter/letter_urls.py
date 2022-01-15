from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import getAllLetters, postLetter, getMyValidLetters, getMyInvalidLetters, getLetters

urlpatterns = [
    # path('', LetterList.as_view()),
    path('getAllLetters', getAllLetters),
    path('postLetter', postLetter),
    path('getMyValidLetters/<str:param>', getMyValidLetters),
    path('getMyInvalidLetters/<str:param>', getMyInvalidLetters),
    path('getLetters/<str:param>', getLetters),
    
    # path('sendEmail', sendEmail),
]

urlpatterns = format_suffix_patterns(urlpatterns)