#!/usr/bin/python3
"""Learner Profile Module for Uhamba project"""
from django.db import models
from api.v1.core.models import BaseModel
from .user import User


class LearnerProfile(BaseModel):
    """LearnerProfile class"""

    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255)
    birthdate = models.DateField(blank=False, null=False)
    gender = models.CharField(choices=[("Male", "M"), ("Female", "F")])
    phone = models.CharField(max_length=32, null=True)
    naturality = models.CharField(max_length=80, null=True)
    residence = models.CharField(max_length=160, null=True)
    learner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="learner_profiles"
    )

    class Meta:
        db_table = "learner_profiles"
