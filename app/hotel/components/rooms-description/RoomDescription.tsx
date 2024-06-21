import { Box, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";

export const RoomDescription = () => {
  return (
    <Box my={40}>
      <Title fz={"h2"} mb={"xl"}>
        About this room
      </Title>
      <Text fz={"sm"} lh={"26px"} mb={"1rem"}>
        {roomDetails[0].description}
      </Text>
    </Box>
  );
};
