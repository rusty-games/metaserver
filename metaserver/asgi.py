"""
ASGI config for metaserver project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "metaserver.settings")

# TODO
# application = ProtocolTypeRouter({
#   "http": AsgiHandler(),
#   ## IMPORTANT::Just HTTP for now. (We can add other protocols later.)
# })
application = get_asgi_application()
