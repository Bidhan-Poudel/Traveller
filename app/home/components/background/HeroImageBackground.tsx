"use client";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./HeroImage.module.css";
import { useMediaQuery } from "@mantine/hooks";

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
          Let the journey begin
        </Title>
        <Container>
          <Text size={isMobile ? "lg" : "xl"} className={classes.description}>
            Get the best prices on 2,000,000+ properties, worldwide
          </Text>
        </Container>
      </div>
    </div>
  );
};

