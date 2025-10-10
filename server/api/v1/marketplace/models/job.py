#!/usr/bin/python3
""" Job Posting Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant
from api.v1.auth.models import User


class Job(BaseModel):
    """ Job class """
    title = models.CharField(max_length=120, null=False)
    description = models.CharField(max_length=160, null=False)
    location = models.CharField(max_length=100, null=False)
    employment_type = models.CharField(max_length=50, null=False)
    is_active = models.BooleanField(default=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posted_jobs')
    employer = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='jobs')

    class Meta:
        db_table = 'jobs'
