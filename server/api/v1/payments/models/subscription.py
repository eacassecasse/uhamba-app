#!/usr/bin/python3
""" Subscription Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from api.v1.tenancy.models import Tenant
from .plan import Plan


class Subscription(BaseModel):
    """ Subscription class """
    status = models.CharField(max_length=16, null=False)
    current_start = models.DateTimeField(null=False)
    current_end = models.DateTimeField(null=False)
    cancelled_at = models.DateTimeField(null=True)
    subscriber = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'subscriptions'
