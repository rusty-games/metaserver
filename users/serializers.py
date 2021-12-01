from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from core.serializers import IOSerializer
from users.models import User


class RegisterRequestSerializer(IOSerializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)


class RegisterResponseSerializer(IOSerializer):
    token = serializers.CharField(required=True)


class LoginRequestSerializer(IOSerializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)


class LoginResponseSerializer(IOSerializer):
    token = serializers.CharField(required=True)
