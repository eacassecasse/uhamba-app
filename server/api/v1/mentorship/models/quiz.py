#!/usr/bin/python3
""" Quiz Module for Uhamba project """
from django.db import models
from core.models import BaseModel
from tenancy.models import Tenant
from .lesson import Lesson


class Quiz(BaseModel):
    """ Quiz class """
    title = models.CharField(max_length=160, null=False)
    randomize = models.BooleanField(default=False, null=False)
    time_limit_sec = models.IntegerField(null=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='quizzes')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='quizzes')

    class Meta:
        db_table = 'quizzes'
