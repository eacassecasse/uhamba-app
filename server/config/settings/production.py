import os
import dj_database_url

from .base import *

DEBUG = False
ALLOWED_HOSTS = []
DATABASES = {"default": dj_database_url.parse(default=os.getenv('DATABASE_URL'))}

# HTTPS/SSL
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Security headers
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True