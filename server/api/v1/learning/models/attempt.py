#!/usr/bin/python3
""" Attempt Module for Uhamba project """
from django.db import models

from core.models import BaseModel
from auth.models import User
from tenancy.models import Tenant
from .quiz import Quiz

ATTEMPT_STATUS = [
    ("in_progress", "IN_PROGRESS"),
    ("submitted", "SUBMITTED"),
    ("graded", "GRADED")
]

class Attempt(BaseModel):
    """ A quiz attempt model """
    started_at = models.DateTimeField(null=False)
    submitted_at = models.DateTimeField(null=True)
    score = models.PositiveIntegerField(null=True)
    max_score = models.PositiveIntegerField(null=True)
    status = models.CharField(max_length=20, choices=ATTEMPT_STATUS, default='in_progress')
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scores')
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='scores')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='quiz_scores')

    class Meta:
        db_table = 'attempts'
