"use client";

import { Group, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import classes from "./backgroundimage.module.css";

export const BackgroundImage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title
          className={classes.title}
          fz={isMobile ? "18" : "42"}
          fw={"bold"}
        >
          Castello Casole Hotel
        </Title>
        <Group px={"xl"} c={"white"}>
          <Text>Home</Text>
          <Text>.</Text>
          <Text>United States</Text>
          <Text>.</Text>
          <Text c={"rgba(255, 255, 255, 0.6)"}>Castello Casole Hotel</Text>
        </Group>
      </div>
    </div>
  );
};
