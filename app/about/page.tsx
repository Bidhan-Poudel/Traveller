import React from "react";
import { BackgroundImage } from "../shared";
import { Box, Container, Grid, Image, Title } from "@mantine/core";
import { aboutCompany } from "./mock";
import { AboutCompany, MissionGrid, ReviewCarousel } from "./components";

const Page = () => {
  return (
    <>
      <BackgroundImage name={"About"} home={"Home"} />
      <Container size={"lg"} mt={"60"} mb={"40"}>
        <Image src={aboutCompany.image} alt={aboutCompany.name} />
        <AboutCompany />
        <MissionGrid />
      </Container>

      <Container size={"xl"} mt={"100"} pt={"100"}>
        <ReviewCarousel />
      </Container>
    </>
  );
};

export default Page;
