#!/usr/bin/python3
""" Badge Award Module for Uhamba project """
from django.db import models
from api.v1.auth.models import User
from api.v1.core.models import BaseModel
from .badge import Badge


class BadgeAward(BaseModel):
    """ BadgeAward class """
    awarded_at = models.DateTimeField(auto_now_add=True)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='badge_awards')
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE, related_name='badge_awards')

    class Meta:
        db_table = 'badge_awards'
