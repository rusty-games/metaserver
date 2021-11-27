# Generated by Django 3.2.9 on 2021-11-27 17:54

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ("games", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="game",
            name="accepted",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="game",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True,
                default=datetime.datetime(2021, 11, 27, 17, 54, 21, 62510, tzinfo=utc),
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="game",
            name="description",
            field=models.TextField(
                default=datetime.datetime(2021, 11, 27, 17, 54, 33, 720561, tzinfo=utc)
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="game",
            name="files",
            field=models.FileField(default=None, upload_to=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="game",
            name="name",
            field=models.CharField(default="", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="game",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
    ]