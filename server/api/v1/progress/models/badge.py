#!/usr/bin/python3
""" Badge Module for Uhamba project """
from django.db import models
from core.models import BaseModel
from tenancy.models import Tenant


class Badge(BaseModel):
    """ Badge class """
    code = models.CharField(max_length=120, null=False)
    name = models.CharField(max_length=160, null=False)
    criteria = models.JSONField(null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='badges')

    class Meta:
        db_table = 'badges'
