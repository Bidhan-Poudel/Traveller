import { Box, Grid, Text, Title } from "@mantine/core";
import React from "react";
import { hotelDetail } from "../../mock";

export const HotelAmenities = () => {
  const hotel = hotelDetail[0];
  return (
    <Box my={40} px={"sm"}>
      <Title fz={"h2"} mb={"xl"}>
        Hotel Amenities
      </Title>
      <Grid>
        {hotel.amenities.map((amenity) => (
          <Grid.Col span={{ xs: 12, sm: 4 }} key={amenity}>
            <Text>{amenity}</Text>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
