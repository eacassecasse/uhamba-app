#!/usr/bin/python3
""" Lesson Serializer Module for EduAccess project """
from . import ModuleSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Lesson


class LessonSerializer(BaseSerializer):
    module = ModuleSerializer(read_only=True)

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'content', 'module']
