#!/usr/bin/python3
"""This module defines a base class for all models"""
import uuid
from django.db import models
from django.utils import timezone


class SoftDeleteQuerySet(models.QuerySet):
    """A custom QuerySet that filters out soft-deleted objects by default"""

    def delete(self):
        """Soft delete objects in the queryset"""
        return super().update(deleted_at=timezone.now())

    def alive(self):
        """Return only non-deleted objects"""
        return self.filter(deleted_at__isnull=True)

class BaseModel(models.Model):
    """A base class for all models"""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)

    class Meta:
        abstract = True

    def __str__(self):
        """Returns a string representation of the instance"""
        cls = (str(type(self)).split(".")[-1]).split("'")[0]
        return "[{}] ({}) {}".format(cls, self.id, self.__dict__)

    def to_dict(self):
        """Convert instance into dict format"""
        dictionary = {}
        dictionary.update(self.__dict__)
        dictionary.update({"__class__": (str(type(self)).split(".")[-1]).split("'")[0]})
        dictionary["created_at"] = self.created_at.isoformat()
        dictionary["updated_at"] = self.updated_at.isoformat()
        dictionary["deleted_at"] = self.deleted_at.isoformat() if self.deleted_at else None
        if "_state" in dictionary:
            dictionary.pop("_state", None)
        return dictionary
    
    def hard_delete(self, using=None, keep_parents=False):
        """Permanently delete the instance from the database"""
        super().delete(using=using, keep_parents=keep_parents)
