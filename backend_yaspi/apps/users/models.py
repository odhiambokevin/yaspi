"""Models for users app"""
import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.db import models
from .managers import CustomUserManager

class User(AbstractBaseUser, PermissionsMixin):
    pkid = models.BigAutoField(primary_key=True, editable=False)
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(verbose_name='Username', max_length=25, unique=True)
    first_name = models.CharField(verbose_name='First Name', max_length=25)
    last_name = models.CharField(verbose_name='Last Name', max_length=25)
    email = models.EmailField(verbose_name='Email Address', unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=timezone.now) #use 'auto_now_add=True' to enforce integrity
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    #make use of custom user manager
    objects = CustomUserManager()

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = "users"

    def __str__(self):
        return self.username
    
    @property
    def get_full_name(self):
        return f"{self.first_name.title()} {self.last_name.title()}"

    def get_short_name(self):
        return self.username

    

    