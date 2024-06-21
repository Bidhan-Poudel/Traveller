"use client";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./HeroImage.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { heroImageText, heroImageTitle } from "../../mock";

export const HeroImageBackground = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title
          className={classes.title}
          fz={isMobile ? "40" : "64"}
          fw={"bold"}
        >
          {heroImageTitle}
        </Title>
        <Container>
          <Text size={isMobile ? "lg" : "xl"} className={classes.description}>
            {heroImageText}
          </Text>
        </Container>
      </div>
    </div>
  );
};
