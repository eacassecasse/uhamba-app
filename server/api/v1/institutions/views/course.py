#!/usr/bin/python3
""" Course View Module for EduAccess project """
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework import filters, generics
from rest_framework.permissions import IsAuthenticated, BasePermission

from ..models import BaseModel
from ..models import Course
from ..serializers import CourseSerializer


class IsEducator(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'educator'


class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['title', 'educator']
    search_fields = ['title', 'description']

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsEducator()]
        return [IsAuthenticated()]


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]
