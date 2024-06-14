"use client";

import { Grid } from "@mantine/core";
import React from "react";
import HotelDetailLeft from "./HotelDetailLeft";
import HotelDetailRight from "./HotelDetailRight";

export const GridContainer = () => {
  return (
    <Grid>
      <Grid.Col span={{ md: 8, sm: 12 }}>
        <HotelDetailLeft />
      </Grid.Col>
      <Grid.Col span={{ md: 4, sm: 0 }}>
        <HotelDetailRight />
      </Grid.Col>
    </Grid>
  );
};
