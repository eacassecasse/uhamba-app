#!/usr/bin/python3
""" Scholarship Award Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from api.v1.tenancy.models import Tenant
from .scholarship import Scholarship


class ScholarshipAward(BaseModel):
    """ ScholarshipAward class """
    amount_cents = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    currency = models.CharField(max_length=8, null=False)
    awarded_at = models.DateTimeField(null=False)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    scholarship = models.ForeignKey(Scholarship, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'scholarship_awards'
