import uuid

from django.db import models

from games.models import Game


class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    game = models.ForeignKey(Game, on_delete=models.PROTECT)
    max_players = models.PositiveSmallIntegerField(default=10)
    current_players = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"Room for {self.game.name} ({self.id})"
