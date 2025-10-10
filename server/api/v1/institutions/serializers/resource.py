#!/usr/bin/python3
""" Resource Serializer Module for EduAccess project """
from . import UserSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Resource


class ResourceSerializer(BaseSerializer):
    creator = UserSerializer(read_only=True)

    class Meta:
        model = Resource
        fields = ['id', 'title', 'description', 'url', 'creator']
