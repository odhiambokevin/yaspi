"""Urls for blog app"""
from django.urls import path
from .views import FeedbackListAPIView

urlpatterns = [
    path("all", FeedbackListAPIView.as_view(), name = "get_feedback"),
]