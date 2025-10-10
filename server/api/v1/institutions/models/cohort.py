#!/usr/bin/python3
""" Cohort Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant


class Cohort(BaseModel):
    """ Cohort class """
    name = models.CharField(max_length=120, null=False)
    starts_at = models.DateTimeField(null=False)
    ends_at = models.DateTimeField(null=False)

    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='cohorts')

    class Meta:
        db_table = 'cohorts'
