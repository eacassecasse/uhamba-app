#!/usr/bin/python3
""" Audit Log Module for the Uhamba Project """

from django.db import models
from .base_model import BaseModel

LOG_ACTIONS = [
    ("insert", "INSERT"),
    ("update", "UPDATE"),
    ("delete", "DELETE"),
    ("soft_delete", "SOFT_DELETE"),
    ("restore", "RESTORE"),
    ("login", "LOGIN"),
    ("export", "EXPORT"),
]
class AuditLog(BaseModel):
    """ Audit Log class """
    actor_user = models.ForeignKey("users.User", null=True, blank=True, on_delete=models.SET_NULL)
    entity_table = models.CharField(max_length=64)
    entity_id = models.UUIDField()
    action = models.CharField(max_length=32, choices=LOG_ACTIONS, null=False)
    diff = models.JSONField(default=dict, blank=True)

    class Meta:
        db_table = "audit_logs"
        indexes = [models.Index(fields=["entity_table", "entity_id", "created_at"])]
