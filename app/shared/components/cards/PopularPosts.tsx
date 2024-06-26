import React from "react";
import { Box, Card, Title } from "@mantine/core";
import { blogs } from "../../mock";
import { BlogCard } from "./BlogCard";

export const PopularPosts = () => {
  return (
    <Card
      p={"xl"}
      shadow="xl"
      radius={"xl"}
      withBorder
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
    >
      <Title fz={"h3"} mb={"lg"}>
        Popular Posts
      </Title>
      <Box p={0}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={{
              id: blog.id,
              image: blog.image,
              title: blog.title,
              date: blog.date,
            }}
          />
        ))}
      </Box>
    </Card>
  );
};
