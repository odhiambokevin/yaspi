"""Models for feedback app"""
from django.db import models
from django.core.mail import send_mail
from django.conf import settings

class Feedback(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(verbose_name='Email Address')
    subject = models.CharField(max_length=100)
    message = models.TextField()
    posted_on = models.DateField(auto_now_add=True)

    def save(self,*args, **kwargs):
        message = f"Message from {self.full_name}, {self.email}. \n {self.message}"
        send_mail(
            self.subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            settings.ADMINS
        )
        super(Feedback, self).save(*args, **kwargs)

  

    class Meta:
        ordering = ['-posted_on',]
        verbose_name = "Feedback"
        verbose_name_plural = "Feedback"
        db_table = "feedback"

    def __str__(self):
        return f"{self.full_name} on {self.posted_on}"
