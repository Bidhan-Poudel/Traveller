"use client";
import { Carousel } from "@mantine/carousel";
import { Box, Title } from "@mantine/core";
import React from "react";
import classes from "./carousel.module.css";
import { hotels } from "@/app/home/mock/hotels";
import { HotelCard } from "@/app/home/components/cards";

const ExploreOptions = () => {
  return (
    <Box mt={"80"}>
      <Title fz={"h1"} mb={"80"}>
        Explore other options
      </Title>
      <Carousel
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "25%" }}
        slideGap="md"
        loop
      >
        {hotels.map((data) => (
          <Carousel.Slide key={data.id}>
            <HotelCard hotel={data} size={200}/>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default ExploreOptions;
