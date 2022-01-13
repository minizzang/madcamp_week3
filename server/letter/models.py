from django.conf import settings
from django.db import models
from django.utils import timezone

class Letter(models.Model):
    recipient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(    #필요한가?
        default=timezone.now)
    open_date = models.DateTimeField(
        blank=True, null=True)
    # letter_type

    def send_letter(self):
        self.save()

    def __str__(self):
        return self.title