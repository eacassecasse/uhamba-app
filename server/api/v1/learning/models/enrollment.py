#!/usr/bin/python3
""" Enrollment Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from api.v1.tenancy.models import Tenant
from .course import Course

ENROLLMENT_STATUS = [
    ("active", "ACTIVE"),
    ("completed", "COMPLETED"),
    ("dropped", "DROPPED"),
    ("paused", "PAUSED")
]

class Enrollment(BaseModel):
    """ An user Enrollment """
    status = models.CharField(max_length=16, choices=ENROLLMENT_STATUS, default="active")
    started_at = models.DateTimeField(null=True)
    completed_at = models.DateTimeField(null=True)
    progress_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=False, default=0.00)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'enrollments'
