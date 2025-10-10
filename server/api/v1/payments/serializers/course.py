#!/usr/bin/python3
""" Course Serializer Module for EduAccess project """
from rest_framework import serializers
from ..serializers import BaseSerializer, UserSerializer

from ..models import BaseModel, User
from ..models import Course


class CourseSerializer(BaseSerializer):
    educator = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role='educator'))
    students = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'educator', 'students']

    def to_representation(self, instance):
        from .module import ModuleSerializer
        self.fields['modules'] = ModuleSerializer(many=True, read_only=True)
        return super().to_representation(instance)
