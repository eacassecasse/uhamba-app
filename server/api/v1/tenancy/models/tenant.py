#!/usr/bin/python3
""" Tenant Module for Uhamba project """
from django.db import models
from core.models import BaseModel


class Tenant(BaseModel):
    """ Tenant class """
    name = models.CharField(max_length=160, null=False, unique=True)
    kind = models.CharField(max_length=32, null=False)
    domain = models.CharField(max_length=255, null=False, unique=True)

    class Meta:
        db_table = 'tenants'
