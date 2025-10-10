import os
import dj_database_url
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
from .base import *

SENTRY_DSN = os.getenv('STU_SENTRY_DSN', None)

DEBUG = False

ALLOWED_HOSTS = os.getenv('STU_ALLOWED_HOSTS', '').split(',')

# HTTPS/SSL
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Security headers
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

CORS_ALLOWED_ORIGINS = os.getenv('STU_CORS_ALLOWED_ORIGINS', '').split(',')

DATABASES = {
    'default': dj_database_url.config(default=os.getenv('DATABASE_URL'))
}

#Logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "[{asctime}] {levelname} {name} {message}",
            "style": "{",
        },
        "simple": {
            "format": "{levelname} {message}",
            "style": "{",
        }
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "verbose"
        }
    },
    "root": {
        "handlers": ["console"],
        "level": "INFO",
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": "INFO",
            "propagate": True,
        },
        "django.db.backends": {
            "handlers": ["console"],
            "level": "DEBUG" if DEBUG else "INFO",
        },
        "api.v1": {
            "handlers": ["console"],
            "level": "DEBUG",
            "propagate": False,
        },
    }
}

# Sentry
if SENTRY_DSN:
    sentry_sdk.init(
        dsn=SENTRY_DSN,
        integrations=[DjangoIntegration()],
        traces_sample_rate=float(os.getenv('STU_SENTRY_TRACES_SAMPLE_RATE', 0.1)),
        send_default_pii=True
    )

# Cache
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": os.getenv('STU_REDIS_URL', 'redis://127.0.0.1:6379/1'),
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}

# Session storage
SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"

# Throttling
REST_FRAMEWORK.update({
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': os.getenv('STU_API_THROTTLE_ANON', '100/day'),
        'user': os.getenv('STU_API_THROTTLE_USER', '1000/day')
    }
})

# Email
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = os.getenv("STU_EMAIL_HOST", "smtp.sendgrid.net")
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv("STU_EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.getenv("STU_EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = os.getenv("STU_DEFAULT_FROM_EMAIL", "noreply@uhamba.com")
