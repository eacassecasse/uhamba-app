#!/usr/bin/python3
""" Invoice Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant
from .subscription import Subscription


class Invoice(BaseModel):
    """ Invoice class """
    amount_cents = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    currency = models.CharField(max_length=8, null=False)
    issued_at = models.DateTimeField(auto_now_add=True)
    paid_at = models.DateTimeField(null=True)
    status = models.CharField(max_length=16, null=False)
    provider_ref = models.CharField(max_length=64, null=True)
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE, null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'invoices'
