#!/usr/bin/python3
""" Tenant View Module for Uhamba project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.v1.core.models import BaseModel
from api.v1.tenancy.models import Tenant
from api.v1.tenancy.serializers import TenantSerializer


class TenantList(generics.ListCreateAPIView):
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer
    permission_classes = [IsAuthenticated]


class TenantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer
    permission_classes = [IsAuthenticated]
