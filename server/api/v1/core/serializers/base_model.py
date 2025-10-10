#!/usr/bin/python3
""" Base Serializer Module for Uhamba project """
from rest_framework import serializers

from api.v1.core.models import BaseModel


class BaseSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    deleted_at = serializers.DateTimeField(read_only=True)
    
    class Meta:
        abstract = True
