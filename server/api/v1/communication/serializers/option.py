#!/usr/bin/python3
""" Option Serializer Module for EduAccess project """
from . import QuestionSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Option


class OptionSerializer(BaseSerializer):
    question = QuestionSerializer(read_only=True)

    class Meta:
        model = Option
        fields = ['id', 'content', 'is_corrected', 'question']
