#!/usr/bin/python3
""" Course Module for Uhamba project """
from django.db import models
from auth.models import User
from core.models import BaseModel
from tenancy.models import Tenant
from .pathway import Pathway

COURSE_LEVELS = [
    ("beginner", "BEGINNER"),
    ("intermediate", "INTERMEDIATE"),
    ("advanced", "ADVANCED")
]
class Course(BaseModel):
    """ Course class """
    slug = models.CharField(max_length=120, null=False)
    title = models.CharField(max_length=160, null=False)
    description = models.TextField()
    level = models.CharField(max_length=20, choices=COURSE_LEVELS, default='beginner')
    language = models.CharField(max_length=10, null=False)
    published_at = models.DateTimeField(null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='courses')
    pathway = models.ForeignKey(Pathway, on_delete=models.CASCADE, null=True, related_name='courses')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='courses_created')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='courses_updated')

    class Meta:
        db_table = 'courses'
