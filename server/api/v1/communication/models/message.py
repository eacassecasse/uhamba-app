#!/usr/bin/python3
""" Message Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from .message_thread import MessageThread


class Message(BaseModel):
    """ Message class """
    body = models.TextField()
    sent_at = models.DateTimeField(null=True, blank=True)
    read_at = models.DateTimeField(null=True, blank=True)
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='messages_sent'
    )
    thread = models.ForeignKey(MessageThread, on_delete=models.CASCADE, related_name='messages')

    class Meta:
        db_table = 'messages'
