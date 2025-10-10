#!/usr/bin/python3
""" Lesson View Module for EduAccess project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel
from ..models import Lesson
from ..serializers import LessonSerializer


class LessonList(generics.ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [IsAuthenticated]


class LessonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [IsAuthenticated]
