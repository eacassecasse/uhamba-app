#!/usr/bin/python3
""" Score View Module for EduAccess project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel
from ..models import Score
from ..serializers import ScoreSerializer


class ScoreList(generics.ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    permission_classes = [IsAuthenticated]


class ScoreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    permission_classes = [IsAuthenticated]
