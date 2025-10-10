#!/usr/bin/python3
""" Enrollment Serializer Module for EduAccess project """
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Enrollment


class EnrollmentSerializer(BaseSerializer):
    class Meta:
        model = Enrollment
        fields = ['id', 'user', 'enrolled_at', 'course']
