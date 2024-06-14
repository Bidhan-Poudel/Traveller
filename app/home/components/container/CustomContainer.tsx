import { Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./CustomContainer.module.css"
import React from "react";

export const CustomContainer = () => {
  const isHugeScreen = useMediaQuery("(min-width:1350px)");
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMedium = useMediaQuery("(min-width:1040px)");

  return <Container className={classes.container}>

  </Container>;
};

