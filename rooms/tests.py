from collections import OrderedDict

from rest_framework import status
from rest_framework.reverse import reverse

from core.testcases import APITestCase
from games.models import Game
from rooms.models import Room


class RoomCreateTestCase(APITestCase):
    def test_create_room_status_code(self):
        game = Game.objects.create()
        response = self.client.post(
            reverse("room-list"),
            {
                "name": "pokoj",
                "game": game.id,
                "max_players": 2,
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_room_body(self):
        game = Game.objects.create()
        response = self.client.post(
            reverse("room-list"),
            {
                "name": "pokoj",
                "game": game.id,
                "max_players": 2,
            },
        )
        room = Room.objects.first()
        self.assertEqual(
            response.data["id"],
            str(room.id),
        )


class RoomGetTestCase(APITestCase):
    def test_get_room_status_code(self):
        game = Game.objects.create()
        room = Room.objects.create(game=game)
        room.save()
        response = self.client.get(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_room_body(self):
        game = Game.objects.create()
        room = Room.objects.create(game=game)
        room.save()
        response = self.client.get(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.data["id"], str(room.id))


class RoomListGetTestCase(APITestCase):
    def test_get_rooms_status_code(self):
        game = Game.objects.create()
        room1 = Room.objects.create(game=game)
        room1.save()
        room2 = Room.objects.create(game=game)
        room2.save()
        room3 = Room.objects.create(game=game)
        room3.save()
        response = self.client.get(reverse("room-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_rooms_body(self):
        game = Game.objects.create()
        room1 = Room.objects.create(game=game)
        room2 = Room.objects.create(game=game)
        room3 = Room.objects.create(game=game)
        response = self.client.get(reverse("room-list"))
        self.assertListEqual(
            response.data,
            [
                OrderedDict(
                    {
                        "id": str(room1.id),
                        "name": room1.name,
                        "game": room1.game.id,
                        "max_players": room1.max_players,
                        "current_players": room1.current_players,
                    }
                ),
                OrderedDict(
                    {
                        "id": str(room2.id),
                        "name": room2.name,
                        "game": room2.game.id,
                        "max_players": room2.max_players,
                        "current_players": room2.current_players,
                    }
                ),
                OrderedDict(
                    {
                        "id": str(room3.id),
                        "name": room3.name,
                        "game": room3.game.id,
                        "max_players": room3.max_players,
                        "current_players": room3.current_players,
                    }
                ),
            ],
        )


class RoomDeleteTestCase(APITestCase):
    def test_delete_room_successful_status_code(self):
        game = Game.objects.create()
        room = Room.objects.create(game=game)
        room.save()
        response = self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_room_successful_body(self):
        game = Game.objects.create()
        room = Room.objects.create(game=game)
        room.save()
        response = self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.data, None)

    def test_delete_room_successful_does_not_exist(self):
        game = Game.objects.create()
        room = Room.objects.create(game=game)
        room.save()
        self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertFalse(Room.objects.filter(id=room.id).exists())

    def test_delete_room_not_found_status_code(self):
        response = self.client.delete(reverse("room-detail", kwargs={"pk": "abc"}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # def test_delete_room_not_found_body(self):
    #     response = self.client.delete(reverse("room-detail", kwargs={"pk": "abc"}))
    #     self.assertDictEqual(response.data, {"detail": "Not found"})
