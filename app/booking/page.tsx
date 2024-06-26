import React from "react";
import { BookingGridContainer } from "./components";
import { BackgroundImage } from "../shared";

const Page = () => {
  return <>
  <BackgroundImage home="Home" name="Checkout" />
  <BookingGridContainer />
  </>;
};

export default Page;
