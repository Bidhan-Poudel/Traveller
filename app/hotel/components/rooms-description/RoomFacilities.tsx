import { Box, Grid, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconPointFilled,
} from "@tabler/icons-react";

export const RoomFacilities = () => {
  return (
    <Box my={40}>
      <Title fz={"h2"} mb={"lg"}>
        Room Facilities
      </Title>
      <Grid>
        <Grid.Col span={6}>
          <Title fz={"h5"} mb={"lg"}>
            Bedrooms
          </Title>
          <Stack>
            <Group gap={"sm"} mt={0} p={0}>
              <IconPointFilled size={12} stroke={1.5} />
              <Text fz={"sm"}>
                {roomDetails[0].roomFacilities.bedrooms.type} Bed
              </Text>
            </Group>
            <Group gap={"sm"} mt={0} p={0}>
              <IconPointFilled size={12} stroke={1.5} />
              <Text fz={"sm"}>
                Total Bedrooms:{" "}
                {roomDetails[0].roomFacilities.bedrooms.totalBed}
              </Text>
            </Group>
            <Group gap={"sm"} mt={0} p={0}>
              <IconPointFilled size={12} stroke={1.5} />
              <Text fz={"sm"}>
                Total Rooms: {roomDetails[0].roomFacilities.bedrooms.totalRooms}
              </Text>
            </Group>
          </Stack>

          <Title fz={"h5"} mb={"lg"} mt={"xl"}>
            Allowed Children
          </Title>
          <Stack>
            <Group gap={"sm"} mt={0} p={0}>
              <IconPointFilled size={12} stroke={1.5} />
              <Text fz={"sm"}>
                Max Allowed Children:{" "}
                {
                  roomDetails[0].roomFacilities.allowedChildren
                    .maxAllowedChildren
                }
              </Text>
            </Group>
            <Group gap={"sm"} mt={0} p={0}>
              <IconPointFilled size={12} stroke={1.5} />
              <Text fz={"sm"}>
                Total Allowed Guests:{" "}
                {
                  roomDetails[0].roomFacilities.allowedChildren
                    .totalAllowedGuests
                }
              </Text>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title fz={"h5"} mb={"lg"}>
            Inclusions
          </Title>
          <Stack>
            {roomDetails[0].roomFacilities.inclusions.map((inclusion) => (
              <Group gap={"sm"} mt={0} p={0} key={inclusion}>
                <IconCircleCheckFilled size={16} stroke={1.5} />
                <Text fz={"sm"}>{inclusion}</Text>
              </Group>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
