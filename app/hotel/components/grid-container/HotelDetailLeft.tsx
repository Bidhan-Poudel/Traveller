import React from "react";
import { Divider } from "@mantine/core";
import {
  HotelAmenities,
  HotelDescription,
  HotelFacilites,
  RatingSection,
  ReviewsSection,
  RoomsContainer,
} from "../hotel-description";

const HotelDetailLeft = () => {
  return (
    <>
      <RatingSection />
      <Divider my={20} />
      <HotelDescription />
      <Divider my={20} />
      <HotelFacilites />
      <Divider my={20} />
      <HotelAmenities />
      <Divider my={20} />
      <RoomsContainer />
      <Divider my={20} />
      <ReviewsSection />
    </>
  );
};

export default HotelDetailLeft;
