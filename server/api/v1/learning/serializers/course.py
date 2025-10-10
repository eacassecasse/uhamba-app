#!/usr/bin/python3
""" Course Serializer Module for Uhamba project """
from rest_framework import serializers
from ..serializers import BaseSerializer, UserSerializer

from core.models import BaseModel
from tenancy.models import Tenant
from ..models import Pathway
from ..models import Course


class CourseSerializer(BaseSerializer):
    tenant = serializers.PrimaryKeyRelatedField(queryset=Tenant.objects.all())
    pathway = serializers.PrimaryKeyRelatedField(queryset=Pathway.objects.all(), allow_null=False, required=False)

    class Meta:
        model = Course
        fields = ['id', 'slug', 'title', 'description', 'level', 'language', 'published_at', 'tenant', 'educator']

