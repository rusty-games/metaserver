from rest_framework import status
from rest_framework.reverse import reverse

from games.models import Game
from core.testcases import APITestCase


class GameGetTestCase(APITestCase):
    def test_get_games_status_code(self):
        response = self.client.get(reverse("game-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_games_body(self):
        game1 = Game.objects.create()
        game2 = Game.objects.create()
        game3 = Game.objects.create()
        response = self.client.get(reverse("game-list"))
        self.assertListEqual(
            response.data,
            [
                {
                    "id": str(game1.id),
                },
                {
                    "id": str(game2.id),
                },
                {
                    "id": str(game3.id),
                },
            ],
        )


class GameCreateTestCase(APITestCase):
    def test_create_game_status_code(self):
        response = self.client.post(reverse("game-list"), {})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_game_body(self):
        response = self.client.post(reverse("game-list"), {})
        game = Game.objects.get(id=response.data["id"])
        self.assertEqual(
            response.data,
            {
                "id": str(game.id),
            },
        )


class GameDeleteTestCase(APITestCase):
    def test_delete_game_successful_status_code(self):
        game = Game.objects.create()
        response = self.client.delete(reverse("game-detail", kwargs={"pk": game.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_game_successful_body(self):
        game = Game.objects.create()
        response = self.client.delete(reverse("game-detail", kwargs={"pk": game.id}))
        self.assertEqual(response.data, None)

    def test_delete_game_successful_does_not_exist(self):
        game = Game.objects.create()
        self.client.delete(reverse("game-detail", kwargs={"pk": game.id}))
        self.assertFalse(Game.objects.filter(id=game.id).exists())
