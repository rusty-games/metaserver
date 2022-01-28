import uuid
import pathlib
import shutil

from django.db import models
from django.dispatch import receiver

from metaserver.settings import MEDIA_ROOT


class Game(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(unique=True, max_length=255)
    description = models.TextField()
    files = models.FileField(null=True, blank=True)
    accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Game {self.name}"


@receiver(models.signals.post_delete, sender=Game)
def delete_file(instance, *args, **kwargs):
    game_folder = MEDIA_ROOT + instance.files.name.replace("/index.html", "")
    path = pathlib.Path(game_folder)
    shutil.rmtree(path)

    game_zip = game_folder + ".zip"
    pathlib.Path(game_zip).unlink()
