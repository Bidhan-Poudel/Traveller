import React from "react";
import { RoomTitleSection } from "./RoomTitleSection";
import { RoomAminities } from "./RoomAminities";
import { Container } from "@mantine/core";
import { RoomOverviewSection } from "./RoomOverviewSection";

export const RoomsDetailRight = () => {
  return <Container px={"sm"}>
    <RoomTitleSection />
    <RoomOverviewSection/>
    <RoomAminities />
  </Container>;
};
