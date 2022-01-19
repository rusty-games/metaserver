import json

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async
from django.core import exceptions
from django.db.models import F
from core.utils import generate_pseudonim
from rooms.models import Room
import uuid

class RoomConsumer(AsyncJsonWebsocketConsumer):
    @database_sync_to_async
    def get_room(self, room_pk) -> Room:
        return Room.objects.get(pk=room_pk)

    async def connect(self):
        room_code = self.scope["url_route"]["kwargs"]["room_code"]
        try:
            self.room = await self.get_room(room_code)
        except (Room.DoesNotExist, exceptions.ValidationError):
            print(f"WebSocket No such room: {room_code}")
            # TODO: should we self.close() here?
            return

        if self.room.current_players + 1 == self.room.max_players:
            print('Hello there')
            await self.add_player()
            await self.start_game()
        elif self.room.current_players >= self.room.max_players:
            print(f"WebSocket Too much players in room {room_code}")
            # TODO: should we self.close() here?
            return
        elif self.room.current_players < self.room.max_players:
            await self.add_player()

    async def disconnect(self, close_code):
        print("Disconnected")
        # leave room group
        await self.channel_layer.group_discard(f"room_{self.room.pk}", self.channel_name)
        # inform others of user quiting
        await self.channel_layer.group_send(
            f"room_{self.room.pk}",
            {
                "type": "send_message",
                "event": "PLAYER_LEFT",
                "data": {"name": self.pseudonim},
            },
        )

    async def add_player(self):
        self.room.current_players = F("current_players") + 1
        await sync_to_async(self.room.save)(update_fields=["current_players"])
        #self.room.save(update_fields=["current_players"])
        self.room_group_name = f"room_{self.room.pk}"
        self.pseudonim = generate_pseudonim()
        # join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

        # inform others about a user joining
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "send_message",
                "event": "NEW_PLAYER",
                "data": {"name": self.pseudonim},
            },
        )

    async def start_game(self):
        session_id = uuid.uuid4()
        await self.channel_layer.group_send(
            f"room_{self.room.pk}",
            {
                "type": "send_message",
                "event": "START_GAME",
                "data": {"session_id": str(session_id)},  # TODO: pass url to game index or something?
            },
        )
        # TODO: should delete room group and Room object somehow

    # async def receive(self, text_data):
    #     """
    #     Receive message from WebSocket.
    #     Get the event and send the appropriate event
    #     """
    #     response = json.loads(text_data)
    #     event = response.get("event", None)
    #     message = response.get("message", None)
    #     if event == "MOVE":
    #         # Send message to room group
    #         await self.channel_layer.group_send(
    #             self.room_group_name,
    #             {"type": "send_message", "message": message, "event": "MOVE"},
    #         )

    #     if event == "START":
    #         # Send message to room group
    #         await self.channel_layer.group_send(
    #             self.room_group_name,
    #             {"type": "send_message", "message": message, "event": "START"},
    #         )

    #     if event == "END":
    #         # Send message to room group
    #         await self.channel_layer.group_send(
    #             self.room_group_name,
    #             {"type": "send_message", "message": message, "event": "END"},
    #         )

    async def send_message(self, res):
        await self.send(
            text_data=json.dumps(
                {
                    "payload": res,
                }
            )
        )
