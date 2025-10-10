#!/usr/bin/python3
"""Mentor Profile Module for Uhamba project"""
from django.db import models
from api.v1.core.models import BaseModel
from .user import User


class MentorProfile(BaseModel):
    """MentorProfile class"""

    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255)
    birthdate = models.DateField(blank=False, null=False)
    gender = models.CharField(choices=[("Male", "M"), ("Female", "F")])
    phone = models.CharField(max_length=32, null=True)
    nationality = models.CharField(max_length=80, null=True)
    residence = models.CharField(max_length=160, null=True)
    headline = models.CharField(max_length=140, null=True)
    bio = models.TextField(null=True)
    rate_per_session_cents = models.IntegerField(null=True, blank=True)
    timezone = models.CharField(max_length=64, null=True)
    mentor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="mentor_profiles"
    )

    class Meta:
        db_table = "mentor_profiles"
