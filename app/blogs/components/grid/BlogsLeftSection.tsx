import React from "react";
import { Box, Group, Pagination } from "@mantine/core";
import { blogs } from "@/app/shared";
import { BlogsCard } from "../cards";

export const BlogsLeftSection = () => {
  return (
    <Box my={"40"}>
      {blogs.map((blog) => (
        <BlogsCard key={blog.id} blog={blog} />
      ))}
      <Group justify="center">
        <Pagination disabled my={"xl"} total={4} />
      </Group>
    </Box>
  );
};
