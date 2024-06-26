"use client";

import { Container, Group, Overlay, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import classes from "./backgroundimage.module.css";

type BackgroundImageProps = {
  name: string;
  home: string;
  location?: string; // Make location optional
};

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  name,
  home,
  location,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.5} zIndex={1} h={"42vh"} />
      <div className={classes.inner}>
        <Container size={"xl"}>
          <Stack>
            <Title
              className={classes.title}
              fz={isMobile ? "24" : "36"}
              fw={"bold"}
              // ta={"center"}
            >
              {name}
            </Title>
            <Group c={"white"} fz={isMobile ? 16 : 14}>
              <Text>{home}</Text>
              {location && (
                <>
                  <Text>.</Text>
                  <Text>{location}</Text>
                </>
              )}
              <Text>.</Text>
              <Text c={"rgba(255, 255, 255, 0.6)"}>{name}</Text>
            </Group>
          </Stack>
        </Container>
      </div>
    </div>
  );
};
