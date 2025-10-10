#!/usr/bin/python3
""" Mentoring Session Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from api.v1.tenancy.models import Tenant

SESSION_STATUS = [
    ("scheduled", "SCHEDULED"),
    ("completed", "COMPLETED"),
    ("cancelled", "CANCELLED"),
    ("no_show", "NO_SHOW")
]

class MentoringSession(BaseModel):
    """ MentoringSession class """
    status = models.CharField(max_length=16, choices=SESSION_STATUS, default="scheduled")
    starts_at = models.DateTimeField(null=False)
    ends_at = models.DateTimeField(null=False)
    completed_at = models.DateTimeField(null=True)
    rating = models.SmallIntegerField(null=True)
    notes = models.TextField(null=True, blank=True)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    mentor = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='mentoring_sessions')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'mentoring_sessions'
