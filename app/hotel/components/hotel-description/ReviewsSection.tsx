import { Box, Button, Text, Title } from "@mantine/core";
import React from "react";
import { ReviewCard } from "./ReviewCard";
import { totalReviews } from "../../mock";
import { UserReview } from "./UserReview";
import { LeaveReview } from "../review";

export const ReviewsSection = () => {
  return (
    <Box my={40} px={"sm"}>
      <Title fz={"h2"} mb={"xl"}>
        Reviews
      </Title>
      <ReviewCard />
      <Text c={"#5E6D77"} mt={"xl"} ta={"center"} fz={"sm"} mb={40}>
        {totalReviews} reviews on this Hotel - Showing 1 to 3
      </Text>
      <UserReview />
      <LeaveReview/>
    </Box>
  );
};
