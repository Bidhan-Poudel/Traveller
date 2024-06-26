"use client";
import { Title } from "@mantine/core";
import React from "react";
import { aboutData, clientReview } from "../../mock";
import { Carousel } from "@mantine/carousel";
import { ReviewCards } from "../cards";

export const ReviewCarousel = () => {
  return (
    <>
      <Title fz={"36"} mt={"sm"} mb={"100"}>
        {aboutData.client}
      </Title>
      <Carousel
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "33.33%" }}
        slideGap="md"
        loop
        controlSize={"40"}
        slidesToScroll={1}
        controlsOffset="lg"
      >
        {clientReview.map((data) => (
          <Carousel.Slide key={data.id}>
            <ReviewCards review={data} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};
