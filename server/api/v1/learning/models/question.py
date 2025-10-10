#!/usr/bin/python3
""" Question module for the Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant
from .quiz import Quiz

QUESTION_TYPES = [
    ("single", "SINGLE"),
    ("multiple", "MULTIPLE"),
    ("short_text", "SHORT_TEXT"),
    ("long_text", "LONG_TEXT"),
    ("numeric", "NUMERIC")
]

class Question(BaseModel):
    """ Question class """
    prompt = models.TextField(null=False)
    type = models.CharField(max_length=24, choices=QUESTION_TYPES, null=False)
    position = models.PositiveIntegerField(null=False)
    points = models.PositiveIntegerField(default=1)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='questions')

    class Meta:
        db_table = 'questions'
