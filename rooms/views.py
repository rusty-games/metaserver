from rest_framework.viewsets import ModelViewSet

from rooms.models import Room
from rooms.serializers import RoomSerializer


class RoomViewSet(ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
