#!/usr/bin/python3
""" Question View Module for EduAccess project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel
from ..models import Question
from ..serializers import QuestionSerializer


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]


class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]
