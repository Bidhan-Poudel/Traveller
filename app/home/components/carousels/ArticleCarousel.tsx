"use client";

import { article } from "@/app/home/mock/article";
import { Carousel } from "@mantine/carousel";
import classes from "./ArticleCarousel.module.css";
import { ArticleCard } from "../cards/ArticleCard";


export const ArticleCarousel = () => {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: "100%", sm: "50%", md: "25%" }}
      slideGap="md"
      loop
      align="start"
      controlSize={"40"}
      slidesToScroll={1}
      controlsOffset="lg"
      opacity={0.9}
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
        indicator: classes.carouselIndicator,
      }}
    >
      {article.map((data) => (
        <Carousel.Slide key={data.id}>
          <ArticleCard data={data} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

