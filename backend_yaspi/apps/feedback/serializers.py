"""Serializers for feedback app"""
from rest_framework import serializers
from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Feedback
        fields = ['id','full_name','email','subject','message','posted_on']