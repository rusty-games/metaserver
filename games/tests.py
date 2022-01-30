from rest_framework import status
from rest_framework.reverse import reverse

from games.models import Game
from core.testcases import APITestCase


class GameGetTestCase(APITestCase):
    def test_get_games_status_code(self):
        response = self.client.get(reverse("game-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # In response time is determinated to 6 decimal point where in django model objcet is only to 2 decimal point
    # def test_get_games_body(self):
    #     game1 = Game.objects.create()
    #     game2 = Game.objects.create()
    #     game3 = Game.objects.create()
    #     response = self.client.get(reverse("game-list"))
    #     self.assertListEqual(
    #         response.data,
    #         [   OrderedDict({
    #                 "id": str(game1.id),
    #                 "name": game1.name,
    #                 "description": game1.description,
    #                 "files": None,
    #                 "accepted": game1.accepted,
    #                 "created_at": str(game1.created_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #                 "updated_at": str(game1.updated_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #             })
    #             , OrderedDict({
    #                 "id": str(game2.id),
    #                 "name": game2.name,
    #                 "description": game2.description,
    #                 "files": None,
    #                 "accepted": game2.accepted,
    #                 "created_at": str(game2.created_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #                 "updated_at": str(game2.created_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #             })
    #             , OrderedDict({
    #                 "id": str(game3.id),
    #                 "name": game3.name,
    #                 "description": game3.description,
    #                 "files": None,
    #                 "accepted": game3.accepted,
    #                 "created_at": str(game3.created_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #                 "updated_at": str(game3.created_at.strftime('%Y-%m-%dT%H:%M:%SZ')),
    #             })
    #             ,
    #         ],
    #     )


class GameCreateTestCase(APITestCase):
    def test_create_game_status_code(self):
        with open("./test_file.zip") as zip_file:
            response = self.client.post(
                reverse("game-list"),
                {"name": "gierka", "description": "test_game", "files": zip_file},
            )
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_game_body(self):
        with open("./test_file.zip") as zip_file:
            response = self.client.post(
                reverse("game-list"),
                {"name": "gierka", "description": "test_game", "files": zip_file},
            )
            game = Game.objects.get(id=response.data["id"])
            self.assertEqual(response.data["id"], str(game.id))


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
