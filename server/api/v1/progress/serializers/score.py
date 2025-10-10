#!/usr/bin/python3
""" Score Serializer Module for EduAccess project """
from . import QuizSerializer, UserSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Score


class ScoreSerializer(BaseSerializer):
    quiz = QuizSerializer(read_only=True)
    student = UserSerializer(read_only=True)

    class Meta:
        model = Score
        fields = ['id', 'quiz', 'student', 'score']
