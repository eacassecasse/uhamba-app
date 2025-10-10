#!/usr/bin/python3
""" Thread Participant Module for Uhamba project """
from django.db import models
from api.v1.core.models import BaseModel
from api.v1.auth.models import User
from .message_thread import MessageThread


class ThreadParticipant(BaseModel):
    """ ThreadParticipant class """
    joined_at = models.DateTimeField(null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='messages_sent'
    )
    thread = models.ForeignKey(MessageThread, on_delete=models.CASCADE, related_name='messages')

    class Meta:
        db_table = 'messages'
