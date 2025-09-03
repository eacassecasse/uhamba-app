#!/usr/bin/python3
""" Pathway Module for Uhamba project """
from django.db import models
from core.models import BaseModel
from tenancy.models import Tenant
from auth.models import User

PATHWAY_VISIBILITY = [
    ("public", "PUBLIC"),
    ("private", "PRIVATE"),
    ("unlisted", "UNLISTED")
]

class Pathway(BaseModel):
    """ Pathway class """
    slug = models.CharField(max_length=120, null=False, unique=True)
    title = models.CharField(max_length=160, null=False)
    summary = models.TextField()
    estimated_duration_hours = models.IntegerField()
    visibility = models.CharField(
        max_length=16,
        choices=PATHWAY_VISIBILITY,
        default='public'
    )
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='pathways_created'
    )
    updated_by = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name='pathways_updated')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='pathways')

    class Meta:
        db_table = 'pathways'
