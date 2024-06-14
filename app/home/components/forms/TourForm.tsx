import { Button, Container, Grid, Text } from "@mantine/core";
import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { UseFormReturnType, useForm } from "@mantine/form";
import classes from "./form.module.css";
import { SearchAutoComplete } from "./SearchAutoComplete";
import { Travellers } from "./Travellers";
import { TourFormValues } from "../../schema";

export const TourForm = () => {
  const tourForm: UseFormReturnType<TourFormValues> = useForm({
    initialValues: {
      location: "",
      noOfTravellers: 1,
    },
    validate: {
      location: (value) => (value.length < 1 ? "Location is required" : null),
      noOfTravellers: (value) =>
        value < 1 ? "Number of travellers should be greater than 1" : null,
    },
  });

  const handleSubmit = (values: TourFormValues) => {
    console.log(values);
  };

  return (
    <Container className={classes.form} bg={"white"}>
      <form onSubmit={tourForm.onSubmit(handleSubmit)}>
        <Grid px={32} py={16}>
          <Grid.Col span={{ md: 5, xs: 12 }} py={0}>
            <SearchAutoComplete form={tourForm} />
          </Grid.Col>
          <Grid.Col span={{ md: 5, xs: 12 }} py={0}>
            <Travellers form={tourForm} />
          </Grid.Col>
          <Grid.Col span={{ md: 2, xs: 12 }} py={0}>
            <Button
              radius={"xl"}
              type="submit"
              size="xl"
              className={classes.button}
            >
              <IconSearch size={16} />
              <Text fz={"md"}>Search</Text>
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
};
