import { Box, Card, Grid, Group, Progress, Text, Title } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import { hotelDetail } from "../../mock";
import { getReviewStatus } from "../../utils/getReviewStatus";
import ReviewBar from "../progressbar/ReviewBar";

export const ReviewCard = () => {
  const hotel = hotelDetail[0];
  const reviews = getReviewStatus(hotel.rating);
  return (
    <Card withBorder radius={"lg"} p={"24px"}>
      <Group gap={"xs"} mb={"xl"}>
        <IconStarFilled size={24} color="orange" />
        <Title order={3} fz={"h3"} fw={700} mr={0}>
          {hotel.rating}/5 {reviews}
        </Title>
        <Text c={"#5E6D77"}>({hotel.noOfReviews} reviews)</Text>
      </Group>
      <ReviewBar />
    </Card>
  );
};
