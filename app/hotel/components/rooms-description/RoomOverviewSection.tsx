import { Box, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";

export const RoomOverviewSection = () => {
  return (
    <Box my={"xl"}>
      <Title fz={"h2"} my={"lg"}>Overview</Title>
      <Text >{roomDetails[0].overview}</Text>
    </Box>
  );
};
