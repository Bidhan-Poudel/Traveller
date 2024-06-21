import { Button, Container, Grid, Text } from "@mantine/core";
import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { UseFormReturnType, useForm } from "@mantine/form";
import classes from "./Form.module.css";
import { SearchAutoComplete } from "./SearchAutoComplete";
import { Travellers } from "./Travellers";
import { TourFormValues } from "../../schema";
import { useMediaQuery } from "@mantine/hooks";

export const TourForm = () => {
  const isMediumScreen = useMediaQuery("(min-width: 992px)");

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
    <Container className={classes.form} bg={"white"} p={0}>
      <form onSubmit={tourForm.onSubmit(handleSubmit)}>
        <Grid p={0}>
          <Grid.Col
            span={{ md: 5, xs: 12 }}
            px={{ base: 16, md: 32 }}
            pt={{ base: "lg", md: 16 }}
            pb={{ base: "", md: 16 }}
          >
            <SearchAutoComplete form={tourForm} />
          </Grid.Col>
          <Grid.Col
            span={{ md: 4, xs: 12 }}
            px={{ base: 16, md: 32 }}
            py={{ base: "xs", md: 16 }}
          >
            <Travellers form={tourForm} />
          </Grid.Col>
          <Grid.Col
            span={{ md: 1, xs: 12 }}
            pt={{ base: "xs", md: 16 }}
            pb={{ base: "0", md: "16" }}
          >
            <Button
              type={"submit"}
              size="xl"
              className={classes.button}
              radius={isMediumScreen ? "xl" : "xs"}
              w={{ base: "100%", md: "auto" }}
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
