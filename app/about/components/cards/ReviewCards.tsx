"use client";

import { Card, Rating, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export const ReviewCards = ({
  review,
}: {
  review: {
    id: number;
    review: string;
    name: string;
    rating: number;
  };
}) => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  return (
    <Card
      py={isMobile ? "lg" : 36}
      px={isMobile ? "lg" : 60}
      radius="lg"
      withBorder
    >
      <Text c={"#5E6D77"} mb={"xl"} lineClamp={5}>
        {review.review}
      </Text>
      <Rating value={review.rating} color="orange" readOnly />
      <Title fz={"h5"} mt={"sm"}>
        {review.name}
      </Title>
    </Card>
  );
};
