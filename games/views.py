from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser

from games.models import Game

from games.serializers import GameSerializer
from rooms.models import Room
from rooms.serializers import RoomSerializer


class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    parser_classes = [MultiPartParser]

    @action(detail=False, methods=["get"])
    def accepted(self, request, *args, **kwargs):
        games = Game.objects.filter(accepted=True)
        return Response(
            status=status.HTTP_200_OK, data=GameSerializer(games, many=True).data
        )

    @action(detail=False, methods=["get"], url_path="not-accepted")
    def not_accepted(self, request, *args, **kwargs):
        games = Game.objects.filter(accepted=False)
        return Response(
            status=status.HTTP_200_OK, data=GameSerializer(games, many=True).data
        )

    @action(detail=True, methods=["get"])
    def rooms(self, request, *args, **kwargs):
        return Response(
            status=status.HTTP_200_OK, data=RoomSerializer(self.get_object().rooms).data
        )
