#!/usr/bin/python3
""" Media Asset Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant


class MediaAsset(BaseModel):
    """ MediaAsset class """
    kind = models.CharField(max_length=24)
    url = models.URLField()
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='media_assets')

    class Meta:
        db_table = 'media_assets'
