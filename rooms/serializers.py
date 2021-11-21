from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from rooms.models import Room


class RoomSerializer(ModelSerializer):
    class Meta:
        fields = ("id",)
        model = Room