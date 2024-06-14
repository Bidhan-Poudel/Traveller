'use client'
import { Rating } from "@mantine/core";
import React, { useState } from "react";

export const StarRatingInput = () => {
  const [rating, setRating] = useState<number>(0);
  return (
    <Rating
      value={rating}
      onChange={setRating}
      size={24}
      color="#FFD700"
      variant="transparent"
    />
  );
};
