import { Box, Title } from "@mantine/core";
import React from "react";
import { hotelDetail } from "../../mock";
import RoomCardsContainer from "./RoomCardsContainer";

export const RoomsContainer = () => {
  const hotel = hotelDetail[0];

  return (
    <Box my={40} px={"sm"}>
      <Title fz={"h2"} mb={"xl"}>
        Available Rooms
      </Title>
      <RoomCardsContainer rooms={hotel.roomTypes} />
    </Box>
  );
};
