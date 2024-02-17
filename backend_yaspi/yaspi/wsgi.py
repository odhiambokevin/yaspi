"""
WSGI config for yaspi project.

"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'yaspi.settings.prod')

application = get_wsgi_application()

app = application