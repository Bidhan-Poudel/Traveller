import { Box, Grid, Group, Text, Title } from "@mantine/core";
import React from "react";
import { hotelDetail } from "../../mock";
import { getFacitiyIcon } from "../../utils/getFacilityIcon";

export const HotelFacilites = () => {
  const hotel = hotelDetail[0];
  return (
    <Box my={40} px={"sm"}>
      <Title fz={"h2"} mb={"xl"}>
        Hotel Facilities
      </Title>
      <Grid>
        {hotel.popularFacilities.map((facility) => {
          const facitliyIcon = getFacitiyIcon(facility);
          return (
            <Grid.Col span={{ xs: 12, sm: 4 }} key={facility}>
              <Group gap={"xs"}>
                {facitliyIcon}
                <Text>{facility}</Text>
              </Group>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};
