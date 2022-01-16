from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import getAllLetters, postLetter, getMyValidLetters, getMyInvalidLetters, getLetters, setOpened, getSavedLetters

urlpatterns = [
    # path('', LetterList.as_view()),
    path('getAllLetters', getAllLetters),
    path('postLetter', postLetter),
    path('getMyValidLetters/<str:param>', getMyValidLetters),
    path('getMyInvalidLetters/<str:param>', getMyInvalidLetters),
    path('getLetters/<str:param>', getLetters),
    path('setOpened', setOpened),
    path('getSavedLetters/<str:param>', getSavedLetters),
    # path('sendEmail', sendEmail),
]

urlpatterns = format_suffix_patterns(urlpatterns)