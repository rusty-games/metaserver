from django.contrib.auth import authenticate
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from drf_yasg import openapi

from core.serializers import MessageSerializer
from users.models import User
from users.serializers import (
    RegisterRequestSerializer,
    LoginRequestSerializer,
    LoginResponseSerializer,
    RegisterResponseSerializer,
)


class RegisterAPIView(APIView):
    permission_classes = (AllowAny,)  # no permissions needed to register
    authentication_classes = []
    request_serializer = RegisterRequestSerializer
    response_serializer = RegisterResponseSerializer
    message_serializer = MessageSerializer

    @swagger_auto_schema(
        request_body=request_serializer,
        responses={
            200: openapi.Response("Successful response", response_serializer),
            409: openapi.Response("Errors", message_serializer),
        },
    )
    def post(self, request):
        ser = self.request_serializer(data=request.data)
        if not ser.is_valid():
            return Response(
                status=status.HTTP_409_CONFLICT,
                data=self.message_serializer(
                    data={"message": "Invalid request."}
                ).initial_data,
            )
        if User.objects.filter(username=ser.data["username"]).exists():
            return Response(
                status=status.HTTP_409_CONFLICT,
                data=self.message_serializer(
                    data={"message": "Username already taken."}
                ).initial_data,
            )
        user = User.objects.create_user(
            username=ser.data["username"],
            password=ser.data["password"],
        )
        token, _ = Token.objects.get_or_create(user=user)
        return Response(
            status=status.HTTP_200_OK,
            data=self.response_serializer({"token": token.key}).data,
        )


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)  # no permissions needed to log in
    authentication_classes = []
    request_serializer = LoginRequestSerializer
    response_serializer = LoginResponseSerializer
    message_serializer = MessageSerializer

    @swagger_auto_schema(
        responses={
            200: openapi.Response("Successful response", LoginResponseSerializer),
            401: openapi.Response("Bad credentials", message_serializer),
        }
    )
    def post(self, request, *args, **kwargs):
        ser = self.request_serializer(data=request.data)
        if not ser.is_valid():
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data=self.message_serializer(
                    data={"message": "Bad request."}
                ).initial_data,
            )
        user = authenticate(
            request=request,
            username=ser.data["username"],
            password=ser.data["password"],
        )
        if not user:
            return Response(
                status=status.HTTP_401_UNAUTHORIZED,
                data=self.message_serializer(
                    data={"message": "Bad credentials."}
                ).initial_data,
            )
        token, _ = Token.objects.get_or_create(user=user)

        return Response(
            status=status.HTTP_200_OK,
            data=self.response_serializer(data={"token": token.key}).initial_data,
        )


class LogoutAPIView(APIView):
    message_serializer = MessageSerializer
    user = User

    @swagger_auto_schema(
        responses={
            204: openapi.Response("Successful response", message_serializer),
        }
    )
    def post(self, request, *args, **kwargs):
        Token.objects.get(user=request.user).delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT,
            data=self.message_serializer(
                data={"message": "Successfully logged out."}
            ).initial_data,
        )
