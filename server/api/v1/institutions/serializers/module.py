#!/usr/bin/python3
""" Module Serializer Module for EduAccess project """
from . import CourseSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Module


class ModuleSerializer(BaseSerializer):
    course = CourseSerializer(read_only=True)

    class Meta:
        model = Module
        fields = ['id', 'title', 'description', 'course']
