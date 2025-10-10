#!/usr/bin/python3
""" Message Thread Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant


class MessageThread(BaseModel):
    """ MessageThread class """
    subject = models.CharField(max_length=255)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='message_threads')

    class Meta:
        db_table = 'message_threads'
