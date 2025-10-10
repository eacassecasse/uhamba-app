#!/usr/bin/python3
""" UserRole Module for Uhamba project """
from django.db import models

from api.v1.core.models import BaseModel
from .role import Role
from .user import User


class UserRole(BaseModel):
    """ UserRole class """
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=False)

    class Meta:
        db_table = 'user_roles'
