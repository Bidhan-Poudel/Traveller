import {
  Box,
  Button,
  Grid,
  Group,
  Select,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "mantine-form-yup-resolver";
import { countriesList } from "../../mock";

export const BookingForm = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "First Name should have at least 2 letters")
      .required("First Name is required"),
    lastName: yup
      .string()
      .min(2, "Last Name should have at least 2 letters")
      .required("Last Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    phone: yup
      .string() // Changed from .number() to .string() as per standard usage
      .min(10, "Phone number should have at least 10 digits")
      .required("Phone number is required"),
    addressLine1: yup.string(),
    addressLine2: yup.string(),
    city: yup.string(),
    state: yup.string(),
    zip: yup.string(),
    country: yup.string().required("Country is required"),
    specialRequirements: yup.string(),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      specialRequirements: "",
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = (values: any) => {
    form.validate();
    console.log(values);
  };

  return (
    <Box my={40}>
      <Title fz="h2" mb="xl">
        Booking Submission
      </Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid mb="lg">
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="First Name"
              placeholder="First Name"
              withAsterisk
              {...form.getInputProps("firstName")}
              error={form.errors.firstName}
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="Last Name"
              placeholder="Last Name"
              withAsterisk
              {...form.getInputProps("lastName")}
              error={form.errors.lastName}
              radius={"md"}
            />
          </Grid.Col>
        </Grid>
        <Grid mb="lg">
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="Email"
              type="email"
              placeholder="email@domain.com"
              withAsterisk
              {...form.getInputProps("email")}
              error={form.errors.email}
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="Phone"
              type="tel" // Changed type from "number" to "tel" for phone input
              placeholder="Your Phone"
              withAsterisk
              {...form.getInputProps("phone")}
              error={form.errors.phone}
              radius={"md"}
            />
          </Grid.Col>
        </Grid>
        <Grid mb="lg">
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="Address Line 1"
              placeholder="Your Address Line 1"
              error={form.errors.addressLine1}
              {...form.getInputProps("addressLine1")}
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="Address Line 2"
              placeholder="Your Address Line 2"
              error={form.errors.addressLine2}
              {...form.getInputProps("addressLine2")}
              radius={"md"}
            />
          </Grid.Col>
        </Grid>
        <Grid mb="lg">
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="City"
              placeholder="Your City"
              error={form.errors.city}
              {...form.getInputProps("city")}
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="State/Province/Region"
              placeholder="State/Province/Region"
              error={form.errors.state}
              {...form.getInputProps("state")}
              radius={"md"}
            />
          </Grid.Col>
        </Grid>
        <Grid mb="lg">
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <TextInput
              size="lg"
              label="ZIP code/Postal code"
              placeholder="ZIP code/Postal code"
              error={form.errors.zip}
              {...form.getInputProps("zip")}
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 6, base: 12 }}>
            <Select
              size="lg"
              label="Country"
              placeholder="Select your country"
              data={countriesList}
              error={form.errors.country}
              {...form.getInputProps("country")}
              withAsterisk
              radius={"md"}
            />
          </Grid.Col>
        </Grid>
        <Textarea
          mb="lg"
          label="Special Requirements"
          placeholder="Special Requirements"
          error={form.errors.specialRequirements}
          {...form.getInputProps("specialRequirements")}
          size="lg"
          radius={"md"}
        />
        <Group justify="flex-start" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
