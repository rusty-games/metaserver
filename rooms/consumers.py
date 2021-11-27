import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async
from django.core import exceptions
from rooms.models import Room


class RoomConsumer(AsyncJsonWebsocketConsumer):
    @database_sync_to_async
    def get_room(self, room_pk) -> Room:
        return Room.objects.get(pk=room_pk)

    async def connect(self):
        # TODO
        room_code = self.scope["url_route"]["kwargs"]["room_code"]
        try:
            self.room = await self.get_room(room_code)
        except (Room.DoesNotExist, exceptions.ValidationError):
            print(f"WebSocket No such room: {room_code}")
            # TODO: should we self.close() here?
            return
        self.room_group_name = f"room_{self.room.pk}"
        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()
        # TODO: inform others of new user joining
        await self.channel_layer.group_send(
            self.room_group_name,
            {"type": "send_message", "event": "NEW_PLAYER"},
        )

    async def disconnect(self, close_code):
        print("Disconnected")
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)
        # TODO: inform others of user quiting
        await self.channel_layer.group_send(
            self.room_group_name,
            {"type": "send_message", "event": "PLAYER_LEFT"},
        )

    async def receive(self, text_data):
        """
        Receive message from WebSocket.
        Get the event and send the appropriate event
        """
        response = json.loads(text_data)
        event = response.get("event", None)
        message = response.get("message", None)
        if event == "MOVE":
            # Send message to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {"type": "send_message", "message": message, "event": "MOVE"},
            )

        if event == "START":
            # Send message to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {"type": "send_message", "message": message, "event": "START"},
            )

        if event == "END":
            # Send message to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {"type": "send_message", "message": message, "event": "END"},
            )

    async def send_message(self, res):
        """Receive message from room group"""
        # Send message to WebSocket
        await self.send(
            text_data=json.dumps(
                {
                    "payload": res,
                }
            )
        )
