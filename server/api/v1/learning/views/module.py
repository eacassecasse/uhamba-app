#!/usr/bin/python3
""" Module's View Module for EduAccess project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel, Course
from ..models import Module
from ..serializers import ModuleSerializer


class ModuleList(generics.ListCreateAPIView):
    serializer_class = ModuleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        return Module.objects.filter(course_id=course_id)

    def perform_create(self, serializer):
        course = Course.objects.get(pk=self.kwargs.get('course_id'))
        serializer.save(course=course)


class ModuleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    permission_classes = [IsAuthenticated]
