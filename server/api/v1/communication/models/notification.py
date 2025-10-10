#!/usr/bin/python3
""" Notification Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant
from api.v1.auth.models import User

NOTIFICATION_CHANNELS = [
    ("email", "EMAIL"),
    ("push", "PUSH"),
    ("in_app", "IN_APP")
]

NOTIFICATION_STATUSES = [
    ("queue", "QUEUE"),
    ("sent", "SENT"),
    ("failed", "FAILED"),
    ("read", "READ")
]

class Notification(BaseModel):
    """ Notification class """
    template_code = models.CharField(max_length=64, null=False)
    payload = models.JSONField(null=False)
    channel = models.CharField(
        max_length=16,
        choices=NOTIFICATION_CHANNELS,
        default='email'
    )
    status = models.CharField(
        max_length=16,
        choices=NOTIFICATION_STATUSES,
        default='queue'
    )
    sent_at = models.DateTimeField(null=True, blank=True)
    read_at = models.DateTimeField(null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notifications_created'
    )
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='notifications')

    class Meta:
        db_table = 'notifications'
