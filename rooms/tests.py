from django.utils import timezone
from rest_framework import status
from rest_framework.reverse import reverse

from core.testcases import APITestCase
from rooms.models import Room


class RoomCreateTestCase(APITestCase):
    def test_create_room_status_code(self):
        response = self.client.post(
            reverse("room-list"),
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_room_body(self):
        response = self.client.post(
            reverse("room-list"),
        )
        room = Room.objects.first()
        self.assertEqual(
            response.data,
            {
                "id": str(room.id),
            },
        )


class RoomGetTestCase(APITestCase):
    def test_get_room_status_code(self):
        room = Room.objects.create()
        response = self.client.get(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_room_body(self):
        room = Room.objects.create()
        response = self.client.get(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(
            response.data,
            {
                "id": str(room.id),
            },
        )


class RoomListGetTestCase(APITestCase):
    def test_get_rooms_status_code(self):
        response = self.client.get(reverse("room-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_rooms_body(self):
        room1 = Room.objects.create()
        room2 = Room.objects.create()
        room3 = Room.objects.create()
        response = self.client.get(reverse("room-list"))
        self.assertListEqual(
            response.data,
            [
                {
                    "id": str(room1.id),
                },
                {
                    "id": str(room2.id),
                },
                {
                    "id": str(room3.id),
                },
            ],
        )


class RoomDeleteTestCase(APITestCase):
    def test_delete_room_successful_status_code(self):
        room = Room.objects.create()
        response = self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_room_successful_body(self):
        room = Room.objects.create()
        response = self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertEqual(response.data, None)

    def test_delete_room_successful_does_not_exist(self):
        room = Room.objects.create()
        self.client.delete(reverse("room-detail", kwargs={"pk": room.id}))
        self.assertFalse(Room.objects.filter(id=room.id).exists())

    def test_delete_room_not_found_status_code(self):
        response = self.client.delete(reverse("room-detail", kwargs={"pk": "abc"}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # def test_delete_room_not_found_body(self):
    #     response = self.client.delete(reverse("room-detail", kwargs={"pk": "abc"}))
    #     self.assertDictEqual(response.data, {"detail": "Not found"})
