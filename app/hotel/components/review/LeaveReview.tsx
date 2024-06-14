"use client";

import React, { useState } from "react";
import CustomBotton from "../buttons/Buttons";
import { Box, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { ReviewForm } from "./ReviewForm";

export const LeaveReview = () => {
  const [toggleClick, setToggleClick] = useState(false);
  console.log(toggleClick);
  return (
    <Box my={40}>
      <CustomBotton
        onClick={() => {
          setToggleClick(!toggleClick);
        }}
      >
        <Text fw={"bold"}>Write a Review</Text>
        <IconChevronDown size={20} />
      </CustomBotton>
      {toggleClick && (
        <Box my={20}>
          <ReviewForm />
        </Box>
      )}
    </Box>
  );
};
