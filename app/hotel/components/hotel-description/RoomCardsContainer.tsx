"use client";
import { Grid } from "@mantine/core";
import React, { useState } from "react";
import { RoomCard } from "./RoomCard";
import { RoomModal } from "../modal";

export const RoomCardsContainer: React.FC<{ rooms: Array<any> }> = ({
  rooms,
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewRoom = (room: any) => {
    setSelectedRoom(room);
    setOpened(true);
  };
  return (
    <>
      <Grid>
        {rooms.map((room: any) => {
          return (
            <Grid.Col span={{ xs: 6, md: 12 }} key={room.id}>
              <RoomCard room={room} onViewRoom={handleViewRoom} />
            </Grid.Col>
          );
        })}
      </Grid>
      {selectedRoom && (
        <RoomModal
          opened={opened}
          onClose={() => setOpened(false)}
          room={selectedRoom}
        />
      )}
    </>
  );
};
