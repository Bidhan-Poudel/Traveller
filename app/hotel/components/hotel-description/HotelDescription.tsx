import { Box, Text, Title } from "@mantine/core";
import React from "react";
import { hotelDetail } from "../../mock";

export const HotelDescription = () => {
  const hotel = hotelDetail[0];
  return (
    <Box my={40} px={"sm"}>
      <Title fz={"h2"} mb={"xl"}>
        About this hotel
      </Title>
      {hotel.description.map((description) => (
        <Text lh={"26px"} mb={"1rem"}>{description}</Text>
      ))}
    </Box>
  );
};

