#!/usr/bin/python3
""" Audit Log Serializer Module for Uhamba project """
from api.v1.core.serializers import BaseSerializer
from api.v1.auth.serializers import UserSerializer

from api.v1.core.models import BaseModel
from api.v1.core.models import AuditLog


class AuditLogSerializer(BaseSerializer):
    actor_user = UserSerializer(many=False, read_only=True)

    class Meta(BaseSerializer.Meta):
        model = AuditLog
        fields = ["id", "actor_user", "entity_table", "action", "entity_id", "diff", "created_at"]
