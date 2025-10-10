from django.urls import path, register_converter
from api.v1.core.utils import UUIDConverter
from .views import TenantList, TenantDetail

register_converter(UUIDConverter, 'uuid')

urlpatterns = [
    path('/', TenantList.as_view(), name='tenant-list'),
    path('/<uuid:id>/', TenantDetail.as_view(), name='tenant-details'),
]