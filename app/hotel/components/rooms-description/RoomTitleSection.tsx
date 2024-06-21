import { Badge, Box, Group, Rating, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";

export const RoomTitleSection = () => {
  return (
    <Box mb={"lg"}>
      <Badge color="green" c={"white"} mb={"lg"}>
        {roomDetails[0].overview}
      </Badge>
      <Stack gap={"lg"}>
        <Title fz={"h2"}>{roomDetails[0].title}</Title>
        <Text>Category: {roomDetails[0].category}</Text>
        <Group gap={"sm"}>
          <Text>Ratings:</Text>
          <Rating value={roomDetails[0].rating} />
        </Group>
      </Stack>
    </Box>
  );
};
