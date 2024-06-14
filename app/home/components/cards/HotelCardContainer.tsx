import { hotels } from "@/app/home/mock/hotels";
import { Container, Grid } from "@mantine/core";
import React from "react";
import { HotelCard } from "./HotelCard";

export const HotelCardContainer = () => {
  return (
    <Container size={"xl"} p={"sm"}>
      <Grid>
        {hotels.map((hotel) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
