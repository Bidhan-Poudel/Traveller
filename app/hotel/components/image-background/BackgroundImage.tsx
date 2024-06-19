"use client";

import { Container, Group, Overlay, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import classes from "./backgroundimage.module.css";

export const BackgroundImage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.5} zIndex={1} h={"42vh"} />
      <div className={classes.inner}>
        {/* <Stack justify="start" align="start" w={"100%"}>
          <Title
            className={classes.title}
            fz={isMobile ? "18" : "42"}
            fw={"bold"}
            ta={"center"}
          >
            Castello Casole Hotel
          </Title>
          <Group c={"white"}>
            <Text>Home</Text>
            <Text>.</Text>
            <Text>United States</Text>
            <Text>.</Text>
            <Text c={"rgba(255, 255, 255, 0.6)"}>Castello Casole Hotel</Text>
          </Group>
        </Stack> */}

        <Container size={'xl'}>
        <Stack  >
          <Title
            className={classes.title}
            fz={isMobile ? "24" : "36"}
            fw={"bold"}
            // ta={"center"}
          >
            Castello Casole Hotel
          </Title>
          <Group c={"white"} fz={isMobile?16:14}>
            <Text>Home</Text>
            <Text>.</Text>
            <Text>United States</Text>
            <Text>.</Text>
            <Text c={"rgba(255, 255, 255, 0.6)"}>Castello Casole Hotel</Text>
          </Group>
        </Stack>
        </Container>
      </div>
    </div>
  );
};
