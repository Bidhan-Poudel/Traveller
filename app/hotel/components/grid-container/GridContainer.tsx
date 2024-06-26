"use client";

import { Grid } from "@mantine/core";
import React from "react";
import HotelDetailLeft from "./HotelDetailLeft";
import HotelDetailRight from "./HotelDetailRight";

export const GridContainer = () => {
  return (
    <Grid gutter={"lg"}>
      <Grid.Col span={{ md: 8, base: 12 }}>
        <HotelDetailLeft />
      </Grid.Col>
      <Grid.Col span={{ md: 4, base: 12 }} >
        <HotelDetailRight />
      </Grid.Col>
    </Grid>
  );
};
