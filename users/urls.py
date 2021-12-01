from django.urls import path, re_path, include

from users.views import (
    RegisterAPIView,
    LoginAPIView,
    LogoutAPIView,
)

urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
]
