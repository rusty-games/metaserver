from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter

from rooms import views
from rooms.consumers import RoomConsumer

router = DefaultRouter()
router.register("rooms", views.RoomViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]

websocket_urlpatterns = [
    re_path(r"^ws/room/(?P<room_code>[\w-]+)/$", RoomConsumer.as_asgi()),
]
