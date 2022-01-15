from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.crypto import get_random_string

class UserManager(BaseUserManager):
    # 일반 유저 생성
    def create_user(self, email, nickname, password):
        if not email:
            raise ValueError('must have user email')
        if not nickname:
            raise ValueError('must have user nickname')
        if not password:
            raise ValueError('must have user password')
        user = self.model(
            email = self.normalize_email(email),
            nickname = nickname
        )
        user.set_password(password)
        user.save(using=self._db)
        
        return user

    # 관리자 유저 생성
    def create_superuser(self, email, nickname, password):
        user = self.create_user(
            email,
            password = password,
            nickname = nickname
        )
        user.is_admin = True
        user.save(using=self._db)

        return user

        
class User(AbstractBaseUser):
    # id = models.AutoField(primary_key = True)
    id = get_random_string(length=10)   # 이거 되는건가??
    email = models.EmailField(default='', max_length=100, null=False, blank=False)
    nickname = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)

    # 헬퍼 클래스 사용
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FILEDS =  'nickname'

    def __str__(self):
        return self.nickname