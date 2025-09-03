#!/usr/bin/python3
""" Lesson Module for Uhamba project """
from django.db import models
from core.models import BaseModel
from tenancy.models import Tenant
from .module import Module


class Lesson(BaseModel):
    """ Lesson class """
    title = models.CharField(max_length=160, null=False)
    content_md = models.TextField()
    position = models.IntegerField(null=False)
    is_assessment = models.BooleanField(default=False)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='lessons')
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='lessons')

    class Meta:
        db_table = 'lessons'
