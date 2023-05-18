from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('rules/<int:rules_id>/', gameRules),
]
