#!/usr/bin/python3
""" Quiz Serializer Module for EduAccess project """
from . import ModuleSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Quiz


class QuizSerializer(BaseSerializer):
    module = ModuleSerializer(read_only=True)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'content', 'module']
