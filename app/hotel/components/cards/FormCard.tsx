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
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { DatePicker, Guests } from "@/app/home/components";

export const FormCard = () => {
  const form = useForm({
    initialValues: {
      checkInDate: null,
      checkOutDate: null,
      children: 1,
      rooms: 1,
      adults: 1,
    },
  });
  const isSmall = useMediaQuery("(max-width: 768px)");

  return (
    <Card shadow="lg" padding="xl" radius="xl" withBorder>
      {/* <Group justify="center" mb={"xl"}> */}
      {/* <CustomBotton onClick={() => {}}>Book Now</CustomBotton> */}
      {/* </Group> */}
      <Title ta={"center"} fz={"h3"}>
        Book Now
      </Title>
      <Grid my={"xl"}>
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
      {/* <Divider my="lg" /> */}
      {/* <DatePickerInput
        placeholder="Check In and CheckOut Date"
        size="md"
        radius={"md"}
        variant="unstyled"
        type="range"
        minDate={new Date()}
        value={[form.values.checkInDate, form.values.checkOutDate]}
        numberOfColumns={isSmall ? 1 : 2}
        onChange={(dates) => {
          if (dates) {
            form.setFieldValue("checkInDate", dates[0]);
            form.setFieldValue("checkOutDate", dates[1]);
          }
        }}
      /> */}
      <DatePicker form={form} />
      <Divider my="lg" />
      <Guests form={form} />
      <Text mb={"xl"}></Text>
      <CustomBotton onClick={() => {}}>Check availability</CustomBotton>
    </Card>
  );
};
