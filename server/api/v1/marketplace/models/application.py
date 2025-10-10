#!/usr/bin/python3
""" Aplication Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from .job import Job

APPLICATION_STATUS = [
    ("aborted", "ABORTED"),
    ("finalized", "FINALIZED"),
    ("on_going", "ON_GOING"),
    ("rejected", "REJECTED")
]

class Application(BaseModel):
    """ Application class """
    status = models.CharField(max_length=16, choices=APPLICATION_STATUS, default="on_going", null=False)
    cv_url = models.URLField(max_length=200, null=False)
    submitted_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(null=False, blank=False)
    applicant = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'applications'
