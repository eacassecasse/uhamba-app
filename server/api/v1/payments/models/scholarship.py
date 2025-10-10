#!/usr/bin/python3
""" Scholarship Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant


class Scholarship(BaseModel):
    """ Scholarship class """
    sponsor_name = models.CharField(max_length=160, null=False)
    currency = models.CharField(max_length=8, null=False)
    budget_cents = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    criterias = models.JSONField(null=False, blank=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='scholarships')

    class Meta:
        db_table = 'scholarships'
