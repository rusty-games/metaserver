from django.urls import path, include
from rest_framework.routers import DefaultRouter

from games import views

router = DefaultRouter()
router.register("games", views.GameViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
