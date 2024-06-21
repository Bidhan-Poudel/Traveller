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

const List = [
  <RatingSection />,
  <HotelDescription />,
  <HotelFacilites />,
  <HotelAmenities />,
  <RoomsContainer />,
  <ReviewsSection />,
];

const HotelDetailLeft = () => {
  return (
    <>
      {List.map((item, index) => (
        <div key={index}>
          {item}
          <Divider my={10} />
        </div>
      ))}
    </>
  );
};

export default HotelDetailLeft;
