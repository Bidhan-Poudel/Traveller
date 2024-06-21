import { Box, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const RoomAminities = () => {
  return (
    <Box my={"xl"}>
      <Title fz={"h2"} my={"xl"}>
        Room Amenities
      </Title>
      <Stack gap={"lg"}>
        {roomDetails.map((item) =>
          item.amenities.map((amenity, index) => (
            <Group gap={"sm"}>
              <IconCircleCheckFilled key={index} size={16} />
              <Text key={index}>{amenity}</Text>
            </Group>
          ))
        )}
      </Stack>
    </Box>
  );
};
