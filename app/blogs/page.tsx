import React from "react";
import { BackgroundImage } from "../shared";
import { BlogsGridContainer } from "./components";

const Page = () => {
  return (
    <>
      <BackgroundImage home="Home" name="Blogs" />
      <BlogsGridContainer />
    </>
  );
};

export default Page;
