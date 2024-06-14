import { Button, Container, Grid, GridCol, Group, Text } from "@mantine/core";
import React from "react";
import { UseFormReturnType, useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import classes from "./form.module.css";
import { SearchAutoComplete } from "./SearchAutoComplete";
import { Guests } from "./Guests";
import { DatePicker } from "./DatePicker";
import { HotelFormValues } from "../../schema";

export const HotelForm = () => {
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
  };

  return (
    <Container className={classes.form} bg={"white"} size='lg'>
      <form onSubmit={hotelForm.onSubmit(handleSubmit)}>
        <Grid px={32} py={16}>
          <Grid.Col span={{ md: 3, xs: 12 }} py={0}>
            <SearchAutoComplete form={hotelForm} />
          </Grid.Col>
          <Grid.Col span={{ md: 4, xs: 12 }} py={0}>
            <DatePicker form={hotelForm} />
          </Grid.Col>
          <Grid.Col span={{ md: 3, xs: 12 }} py={0}>
            <Guests form={hotelForm} />
          </Grid.Col>
          <Grid.Col span={{ md: 1, xs: 12 }} py={0}>
            <Button
              radius={"xl"}
              type="submit"
              className={classes.button}
              size="xl"
              // mt={6}
              
            >
              <IconSearch size={16} />
              <Text ml="xs" fz={"md"}>Search</Text>
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
};

