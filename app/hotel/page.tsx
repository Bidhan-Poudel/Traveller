import React from "react";
import { GridContainer, HotelImages } from "./components";
import { Container, Divider } from "@mantine/core";
import ExploreOptions from "./components/explore/ExploreOptions";
import { BackgroundImage } from "../shared";
const page = () => {
  return (
    <>
      <BackgroundImage
        name={"Castello Casole Hotel"}
        home={"Home"}
        location={"United States"}
      />
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
