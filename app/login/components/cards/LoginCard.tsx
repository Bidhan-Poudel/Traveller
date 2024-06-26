"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useForm } from "@mantine/form";
import * as yup from "yup";
import { yupResolver } from "mantine-form-yup-resolver";

export const LoginCard = () => {
  const schema = yup.object().shape({
    email: yup.string().required("First Name is required"),
    passowrd: yup.string().required("Password is required"),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = (values: any) => {
    form.validate();
    console.log(values);
  };
  return (
    <Card
      shadow="xs"
      withBorder
      radius={"lg"}
      mx={"sm"}
      py={"lg"}
      maw={"576px"}
      w={"100%"}
    >
      <Group justify="center" gap={"xl"}>
        <Link href={"/login"}>Sign in </Link>
        <Link href={"/register"}>Sign Up </Link>
      </Group>
      <Divider my={"lg"} />
      <Box px={"xl"}>
        <Title fz={"h2"}>Sign in to your account</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="Email"
            size="lg"
            withAsterisk
            {...form.getInputProps("email")}
            error={form.errors.email}
            radius={"md"}
            my={"md"}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            size="lg"
            withAsterisk
            {...form.getInputProps("password")}
            error={form.errors.password}
            radius={"md"}
            my={"md"}
          />
          <Button type="submit" size="lg" fullWidth radius={"xl"}>
            Login
          </Button>
        </form>
        <Group mt={"lg"} justify="right">
          <Link href={"#"}>Forgot Password?</Link>
        </Group>
      </Box>
    </Card>
  );
};
