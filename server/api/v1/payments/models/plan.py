#!/usr/bin/python3
""" Plan Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant

PLAN_PERIOD = [
    ("monthly", "MONTHLY"),
    ("annual", "ANNUAL")
]

class Plan(BaseModel):
    """ Plan class """
    code = models.CharField(max_length=120, null=False, unique=True)
    name = models.CharField(max_length=160, null=False)
    currency = models.CharField(max_length=8, null=False)
    price_cents = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    features = models.JSONField(null=False, blank=False)
    period = models.CharField(
        max_length=16,
        choices=PLAN_PERIOD,
        default='monthly'
    )
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='plans')

    class Meta:
        db_table = 'plans'
