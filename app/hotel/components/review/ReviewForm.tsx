"use client";

import {
  Box,
  Card,
  Grid,
  Group,
  Input,
  Paper,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import React from "react";
import classes from "./reviewform.module.css";
import { StarRatingInput } from "./StarRatingInput";
import CustomBotton from "../buttons/Buttons";

export const ReviewForm = () => {
  return (
    <Box my={40}>
      <Title fz={"h2"} mb={"md"}>
        Leave a Review
      </Title>
      <Text fz={"md"} c={"#5E6D77"} mb={"xl"}>
        Your email address will not be published. Required fields are marked *
      </Text>

      <Grid mb={"lg"}>
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <Input
            placeholder="Name *"
            radius={"md"}
            size="lg"
            classNames={{ input: classes.textInput }}
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <Input
            placeholder="Email *"
            radius={"md"}
            size="lg"
            classNames={{ input: classes.textInput }}
          />
        </Grid.Col>
      </Grid>
      <Grid mb={"lg"}>
        <Grid.Col span={12}>
          <Input
            placeholder="Title *"
            radius={"md"}
            size="lg"
            classNames={{ input: classes.textInput }}
          />
        </Grid.Col>
      </Grid>
      <Paper withBorder mb={"lg"} radius={"md"}>
        <Group gap={"xl"} my={"xl"} ml={"md"}>
          <Text fz={"lg"} c={"#5E6D77"}>
            Your Rating *
          </Text>
          <StarRatingInput />
        </Group>
      </Paper>
      <Grid mb={"lg"}>
        <Grid.Col span={12}>
          <Textarea
            placeholder="Your Review *"
            radius={"md"}
            size="lg"
            classNames={{ input: classes.textArea }}
            minRows={4}
          />
        </Grid.Col>
      </Grid>
      <CustomBotton onClick={() => {}}>Post a Review</CustomBotton>
    </Box>
  );
};

ReviewForm;
