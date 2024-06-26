import React from "react";
import { GridContainer } from "./components";
import { BackgroundImage } from "../shared";

const page = () => {
  return (
    <>
      <BackgroundImage name={"Blog"} home={"Home"} />
      <GridContainer />
    </>
  );
};

export default page;
