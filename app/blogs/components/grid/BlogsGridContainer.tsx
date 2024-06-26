"use client";

import { Container, Grid } from "@mantine/core";
import React from "react";
import { BlogsLeftSection } from "./BlogsLeftSection";
import { BlogRightSection } from "@/app/shared";

export const BlogsGridContainer = () => {
  return (
    <>
      <Container size={"xl"} my={"lg"}>
        <Grid gutter={"xl"}>
          <Grid.Col span={{ md: 8, base: 12 }}>
            <BlogsLeftSection />
          </Grid.Col>
          <Grid.Col span={{ md: 4, base: 12 }}>
            <BlogRightSection />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
