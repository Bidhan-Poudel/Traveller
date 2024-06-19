import { hotels } from "@/app/home/mock/hotels";
import { Container, Grid } from "@mantine/core";
import React from "react";
import { HotelCard } from "./HotelCard";
import { HorizontalCards } from "@/app/search/components";

export const HotelCardContainer = ({
  size,
  view,
}: {
  size: string;
  view: string;
}) => {
  switch (view) {
    case "horizontal":
      return (
        <Container size={size} p={"sm"}>
          <Grid>
            {hotels.map((hotel) => (
              <Grid.Col span={{ lg: 12 }} key={hotel.id}>
                <HorizontalCards hotel={hotel} size={280} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      );
    case "vertical":
      return (
        <Container size={size} p={"sm"}>
          <Grid>
            {hotels.map((hotel) => (
              <Grid.Col span={{ xs: 6, md: 4 }} key={hotel.id}>
                <HotelCard hotel={hotel} size={size == "lg" ? 200 : 280} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      );
    default:
      return null;
  }
};
