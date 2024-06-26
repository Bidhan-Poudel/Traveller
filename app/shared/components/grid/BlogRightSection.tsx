import React from "react";
import { SearchForm } from "../../../blog/components/form";
import { Box } from "@mantine/core";
import { PopularPosts } from "@/app/shared";

export const BlogRightSection = () => {
  return (
    <Box m={0} p={0} pos={"sticky"} top={0}>
      <SearchForm />
      <PopularPosts/>
    </Box>
  );
};
