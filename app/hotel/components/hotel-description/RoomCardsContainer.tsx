import { Grid } from "@mantine/core";
import React from "react";
import { RoomCard } from "./RoomCard";

const RoomCardsContainer: React.FC<{ rooms: Array<any> }> = ({ rooms }) => {
  return (
    <Grid>
      {rooms.map((room: any) => {
        return (
          <Grid.Col span={{ xs: 6, md: 12 }} key={room.id}>
            <RoomCard room={room} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default RoomCardsContainer;
