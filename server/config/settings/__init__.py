import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from a .env file if present

DJANGO_ENV = os.getenv('STU_ENVIRON', 'development')

if DJANGO_ENV == 'production':
    from .production import *
else:
    from .development import *
