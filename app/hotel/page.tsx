import React from "react";
import { GridContainer, HotelImages } from "./components";
import { Container, Divider } from "@mantine/core";
import ExploreOptions from "./components/explore/ExploreOptions";
import { BackgroundImage } from "./components/image-background/BackgroundImage";

const page = () => {
  return (
    <>
      <BackgroundImage />
      <HotelImages />
      <Container size={"xl"} my={"20"}>
        <GridContainer />
        <Divider my={20} />
        <ExploreOptions />
      </Container>
    </>
  );
};

export default page;
