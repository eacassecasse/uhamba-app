#!/usr/bin/python3
""" Question Serializer Module for EduAccess project """
from . import QuizSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Question


class QuestionSerializer(BaseSerializer):
    quiz = QuizSerializer(read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'content', 'question_type', 'quiz']
