from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path("api/v1/tenants/", include("api.v1.tenancy.urls")),
    path("admin/", admin.site.urls),
]
