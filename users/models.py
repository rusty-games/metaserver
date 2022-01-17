import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return f"User {self.name}"

    @property
    def name(self) -> str:
        return f"{self.first_name} {self.last_name}"