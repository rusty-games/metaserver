# Generated by Django 3.2.9 on 2021-11-30 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("rooms", "0004_alter_room_game"),
    ]

    operations = [
        migrations.AddField(
            model_name="room",
            name="name",
            field=models.CharField(default="Noname Room", max_length=255),
            preserve_default=False,
        ),
    ]
