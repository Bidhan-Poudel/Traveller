"use client";

import {
  Card,
  Divider,
  Grid,
  Group,
  Input,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import CustomBotton from "../buttons/Buttons";
import { IconCurrencyEuro, IconStarFilled } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

export const FormCard = () => {
  const leftSection = (
    <Stack gap="xs" p={0} w={"100%"} align="center">
      <Text p={0} fw={"500"} c={"black"}>
        Check In
      </Text>
      <Text p={0} c={"#5E6D77"}>
        14/06/2024
      </Text>
    </Stack>
  );

  const rightSection = (
    <Stack
      gap={"xs"}
      p={0}
      w={"100%"}
      align="center"
      style={{ borderLeft: "1px solid #ccc" }}
    >
      <Text p={0} fw={"500"} c={"black"}>
        Check Out
      </Text>
      <Text p={0} c={"#5E6D77"}>
        15/06/2024
      </Text>
    </Stack>
  );

  return (
    <Card shadow="xs" padding="xl" radius="md" withBorder>
      <Group justify="center" mb={"xl"}>
        <CustomBotton onClick={() => {}}>Book Now</CustomBotton>
      </Group>
      <Grid mb={"xl"}>
        <Grid.Col span={6}>
          <Group gap={3}>
            <Text c={"#5E6D77"} fz={"sm"}>
              From
            </Text>
            <Title fz={"h4"}>€200</Title>
            <Text c={"#5E6D77"} fz={"sm"}>
              /night
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <Group gap={3} justify="end">
            <IconStarFilled size={16} color="orange" />
            <Title fz={"h5"}>4</Title>
            <Text c={"#5E6D77"} fz={"sm"}>
              (3 reviews)
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
      <Paper radius="xl" withBorder>
        <Input
          label="lest test"
          leftSection={leftSection}
          rightSection={rightSection}
          component={DatePickerInput}
          rightSectionWidth={"50%"}
          leftSectionWidth={"50%"}
          variant="white"
          size="xl"
          p={"md"}
        >
          {/* <DatePickerInput
          variant="unstyled"
          size="md"
          radius={"md"}
          type="range"
          numberOfColumns={2}
          minDate={new Date()}
          value={[new Date(), new Date()]}
          onChange={(dates) => {
            if (dates) {
              console.log(dates);
            }
          }}
          // opacity={0}
        >
        </DatePickerInput> */}
        </Input>
        <Divider />
      </Paper>
    </Card>
  );
};
