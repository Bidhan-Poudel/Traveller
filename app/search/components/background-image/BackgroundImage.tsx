"use client";
import { HotelForm } from "@/app/home/components";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export const BackgroundImage = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <Box
      style={{
        height: isMobile ? "60vh" : "42vh",
        backgroundImage:
          "url('https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/banner-search-form-min.png')",
        backgroundSize: "cover",
        alignContent: "end  ",
        padding: "0 14px 32px 14px",
      }}
    >
      <HotelForm />
    </Box>
  );
};
