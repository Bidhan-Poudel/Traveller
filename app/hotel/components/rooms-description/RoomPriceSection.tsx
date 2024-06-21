import { Box, Grid, Group, Text, Title } from "@mantine/core";
import React from "react";
import { roomDetails } from "../../mock";
import CustomBotton from "../buttons/Buttons";
import { IconToolsKitchen } from "@tabler/icons-react";

export const RoomPriceSection = () => {
  return (
    <Box my={40}>
      <Grid>
        <Grid.Col span={6}>
          <Title fz={"h5"} mb={"xs"}>
            {" "}
            Starts from
          </Title>
          <Group gap={"sm"} mt={0} p={0}>
            <Title fz={"h1"}>NPR {roomDetails[0].price}</Title>
            <Text fz={"sm"}>per night</Text>
          </Group>
          {roomDetails[0].isBreakfastIncluded && (
            <Group gap={"sm"} c={"green"} mt={"xs"}>
              <IconToolsKitchen size={20} stroke={1.5} />
              <Text fz={"sm"}>Breakfast Included</Text>
            </Group>
          )}
        </Grid.Col>
        <Grid.Col span={6}>
          <Group justify="end" align="center" h={"100%"}>
            <CustomBotton onClick={() => {}}>Book Now</CustomBotton>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
