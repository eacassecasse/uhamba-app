#!/usr/bin/python3
""" Certificate Module for Uhamba project """
from django.db import models
from auth.models import User
from core.models import BaseModel
from tenancy.models import Tenant
from learning.models import Course, Pathway


class Certificate(BaseModel):
    """ Certificate class """
    serial_number = models.CharField(max_length=64, null=False, unique=True)
    verification_hash = models.CharField(max_length=255, null=False, unique=True)
    issued_at = models.DateTimeField(null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=False, related_name='certificates')
    pathway = models.ForeignKey(Pathway, on_delete=models.CASCADE, null=True, related_name='certificates')
    learner = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='certificates')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, related_name='certificates')

    class Meta:
        db_table = 'certificates'
