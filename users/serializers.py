from rest_framework import serializers

from core.serializers import IOSerializer


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
