"use client";
import { Container, Grid, Text } from "@mantine/core";
import React from "react";
import { BlogLeftSection } from "./BlogLeftSection";
import { BlogRightSection } from "@/app/shared";

export const GridContainer = () => {
  return (
    <>
      <Container size={"xl"} my={"lg"}>
        <Grid gutter={"lg"}>
          <Grid.Col span={{ md: 8, base: 12 }}>
            <BlogLeftSection />
          </Grid.Col>
          <Grid.Col span={{ md: 4, base: 12 }}>
            <BlogRightSection />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
