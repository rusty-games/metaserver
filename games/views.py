import os

from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser

from core.serializers import MessageSerializer
from games.models import Game

from games.serializers import GameSerializer
from metaserver.settings import MEDIA_ROOT
from rooms.serializers import RoomSerializer

from zipfile import ZipFile

from users.models import User


class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    parser_classes = [MultiPartParser]
    message_serializer = MessageSerializer
    user = User

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"message": "Bad request"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            game_files = serializer.validated_data["files"]
            game_name = serializer.validated_data["name"]
            original_zip_path = MEDIA_ROOT + '/' + game_files.name
            game_folder = MEDIA_ROOT + '/' + game_name

            # save zip file to directory specified by MEDIA_ROOT
            game = serializer.save()

            # change 'files' field to point to index.html file
            data = request.data
            data["files"] = '/' + game_name + "/index.html"
            serializer.update(game, data)

            # extract all the contents of zip file in MEDIA_ROOT directory
            with ZipFile(original_zip_path, 'r') as zip_file:
                zip_file.extractall(game_folder)

            # change name of the zip file to reflect the name of the game
            new_zip_path = MEDIA_ROOT + '/' + game_name + ".zip"
            os.rename(original_zip_path, new_zip_path)

            return Response(
                GameSerializer(game).data,
                status=status.HTTP_201_CREATED,
            )

    def destroy(self, request, *args, **kwargs):
        print(request)
        if request.user.is_authenticated:
            return super().destroy(request, *args, **kwargs)
        return Response(
            status=status.HTTP_401_UNAUTHORIZED,
            data=self.message_serializer(
                data={"message": "Bad credentials."}
            ).initial_data,
        )

    def update(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return super().update(request, *args, **kwargs)
        return Response(
            status=status.HTTP_401_UNAUTHORIZED,
            data=self.message_serializer(
                data={"message": "Bad credentials."}
            ).initial_data,
        )

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
            status=status.HTTP_200_OK,
            data=RoomSerializer(self.get_object().rooms, many=True).data,
        )
