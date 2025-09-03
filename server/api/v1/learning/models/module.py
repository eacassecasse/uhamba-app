#!/usr/bin/python3
""" Course Modules for Uhamba project """
from django.db import models
from core.models import BaseModel
from tenancy.models import Tenant
from .course import Course


class Module(BaseModel):
    """ Module class """
    title = models.CharField(max_length=160, null=False)
    position = models.IntegerField(null=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='modules')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='modules')

    class Meta:
        db_table = 'modules'
