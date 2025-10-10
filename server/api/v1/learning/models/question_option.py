#!/usr/bin/python3
""" Question Option module for the Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from .question import Question


class QuestionOption(BaseModel):
    """ QuestionOption class """
    label = models.TextField(null=False)
    is_correct = models.BooleanField(default=False)
    position = models.PositiveIntegerField(null=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, null=False, related_name='question_options')

    class Meta:
        db_table = 'question_options'
