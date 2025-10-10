#!/usr/bin/python3
""" Progress snapshot Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from api.v1.learning.models import Course
from api.v1.tenancy.models import Tenant


class ProgressSnapshot(BaseModel):
    """ ProgressSnapshot class """
    captured_at = models.DateTimeField(auto_now_add=True)
    lessons_completed = models.PositiveIntegerField(null=False)
    lessons_total = models.PositiveIntegerField(null=False)
    quizzes_passed = models.PositiveIntegerField(null=False)
    progress_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=False)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='progress')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='progress')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='progress')

    class Meta:
        db_table = 'progress_snapshots'
