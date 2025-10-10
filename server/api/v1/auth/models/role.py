#!/usr/bin/python3
"""Role Module for Uhamba project"""
from django.db import models
from api.v1.core.models import BaseModel


class Role(BaseModel):
    """Role class"""

    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = "roles"
