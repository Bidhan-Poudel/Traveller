import React from "react";
import { RoomsImageCarousel } from "../carousels";
import { RoomPriceSection } from "./RoomPriceSection";
import { RoomFacilities } from "./RoomFacilities";
import { RoomDescription } from "./RoomDescription";
import { Container } from "@mantine/core";

export const RoomsDetailLeft = () => {
  return (
    <Container px={"sm"}>
      <RoomsImageCarousel />
      <RoomPriceSection />
      <RoomFacilities />
      <RoomDescription />
    </Container>
  );
};
