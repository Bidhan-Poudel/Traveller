"use client";

import { Carousel } from "@mantine/carousel";
import React from "react";
import { roomDetails } from "../../mock";
import { Image, Title } from "@mantine/core";

export const RoomsImageCarousel = () => {
  return (
    <>
      <Title fz={"h2"} mb={"xl"}>
        Room Images
      </Title>
      <Carousel withIndicators height={315}>
        {roomDetails.map((room) =>
          room.images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Image src={image} h={"100%"} alt="room image" />
            </Carousel.Slide>
          ))
        )}
      </Carousel>
    </>
  );
};
