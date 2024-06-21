"use client";
import { Button, Container, Grid, Text } from "@mantine/core";
import React from "react";
import { UseFormReturnType, useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Form.module.css";
import { SearchAutoComplete } from "./SearchAutoComplete";
import { Guests } from "./Guests";
import { DatePicker } from "./DatePicker";
import { HotelFormValues } from "../../schema";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export const HotelForm = () => {
  const isMediumScreen = useMediaQuery("(min-width: 992px)");
  const router = useRouter();

  const hotelForm: UseFormReturnType<HotelFormValues> = useForm({
    initialValues: {
      location: "",
      checkIn: null,
      checkOut: null,
      rooms: 1,
      adults: 1,
      children: 0,
    },
    validate: {
      location: (value) => (value.length < 1 ? "Location is required" : null),
      checkIn: (value) => (value === null ? "CheckIn date is required" : null),
      checkOut: (value) =>
        value === null ? "CheckOut date is required" : null,
      adults: (value) => (value < 1 ? "At least 1 adult is required" : null),
      rooms: (value) => (value < 1 ? "At least 1 room is required" : null),
    },
  });

  const handleSubmit = (values: HotelFormValues) => {
    console.log(values);
    router.push("/search");
  };

  return (
    <Container className={classes.form} bg={"white"} size="lg" p={0}>
      <form onSubmit={hotelForm.onSubmit(handleSubmit)}>
        <Grid p={0}>
          <Grid.Col
            span={{ md: 3, xs: 12 }}
            px={{ base: 16, md: 32 }}
            pt={{ base: "lg", md: 16 }}
            pb={{ base: "", md: 16 }}
          >
            <SearchAutoComplete form={hotelForm} />
          </Grid.Col>
          <Grid.Col
            span={{ md: 4, xs: 12 }}
            // px={{ base: 16, md: "xl" }}
            py={{ base: "xs", md: 16 }}
            className={classes.datePicker}
          >
            <DatePicker form={hotelForm} />
          </Grid.Col>
          <Grid.Col
            span={{ md: 3, xs: 12 }}
            px={{ base: 16, md: 0 }}
            py={{ base: "xs", md: 16 }}
          >
            <Guests form={hotelForm} />
          </Grid.Col>
          <Grid.Col
            span={{ md: 2, xs: 12 }}
            pt={{ base: "xs", md: 16 }}
            pb={{ base: "0", md: "16" }}
            px={{ base: 7, md: 16 }}
          >
            <Button
              type="submit"
              radius={isMediumScreen ? "xl" : "xs"}
              className={classes.button}
              size="xl"
              w={{ base: "100%", md: "auto" }}
            >
              <IconSearch size={16} />
              <Text ml="xs" fz={"md"}>
                Search
              </Text>
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
};
