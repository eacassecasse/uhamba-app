#!/usr/bin/python3
""" Tenant Serializer Module for Uhamba project """
from api.v1.core.serializers import BaseSerializer

from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant


class TenantSerializer(BaseSerializer):

    class Meta:
        model = Tenant
        fields = ['id', 'name', 'kind', 'domain', 'created_at', 'updated_at']
