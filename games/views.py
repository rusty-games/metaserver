from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

from games.models import Game

from games.serializers import GameSerializer
from rooms.models import Room
from rooms.serializers import RoomSerializer


class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    @action(detail=True, methods=["get"])
    def rooms(self, request, *args, **kwargs):
        return Response(
            status=status.HTTP_200_OK, data=RoomSerializer(self.get_object().rooms).data
        )
