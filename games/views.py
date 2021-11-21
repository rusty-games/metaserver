from rest_framework.viewsets import ModelViewSet

from games.models import Game

from games.serializers import GameSerializer


class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
