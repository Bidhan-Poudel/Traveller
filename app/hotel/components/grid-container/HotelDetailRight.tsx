import React from "react";
import { FormCard } from "../cards/FormCard";
import { ImageCard } from "../cards/ImageCard";
import { Box } from "@mantine/core";

const HotelDetailRight = () => {
  return (
    <Box m={0} p={0} pos={"sticky"} top={0}>
      <FormCard />
      <ImageCard/>
    </Box>
  );
};

export default HotelDetailRight;
