'use client';

import { Container, Grid } from "@mantine/core";
import React from "react";
import { BookingLeftSection } from "./BookingLeftSection";
import { BookingRightSection } from "./BookingRightSection";

export const BookingGridContainer = () => {
  return (
    <Container size={"xl"}>
    <Grid>
      <Grid.Col span={{md:8, base:12}}>
        <BookingLeftSection />
      </Grid.Col>
      <Grid.Col span={{md:4, base:12}}>
        <BookingRightSection />
      </Grid.Col>
    </Grid>
    </Container>
  );
};
