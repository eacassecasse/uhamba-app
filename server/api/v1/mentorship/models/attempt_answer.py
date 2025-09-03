#!/usr/bin/python3
""" Answer Attempts Module for Uhamba project """
from django.db import models

from core.models import BaseModel
from .attempt import Attempt
from .question import Question


class AttemptAnswer(BaseModel):
    """ AttemptAnswer class """
    selected_option_ids = models.DateTimeField(null=False)
    free_text = models.TextField()
    is_correct = models.BooleanField(null=True)
    awarded_points = models.PositiveIntegerField(null=True)
    attempt = models.ForeignKey(Attempt, on_delete=models.CASCADE, related_name='attempts')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='attempts')

    class Meta:
        db_table = 'attempt_answers'
