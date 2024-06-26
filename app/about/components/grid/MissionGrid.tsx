"use client";
import React from "react";
import { Grid } from "@mantine/core";
import { MissionSection } from "./MissionSection";
import { GoalsSection } from "./GoalsSection";

export const MissionGrid = () => {
  return (
    <Grid mt={"lg"} gutter={"lg"}>
      <Grid.Col span={{sm:6}}>
        <MissionSection />
      </Grid.Col>
      <Grid.Col span={{sm:6}}>
        <GoalsSection />
      </Grid.Col>
    </Grid>
  );
};
