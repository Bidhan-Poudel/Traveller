import React from "react";
import { Card, Grid, Image, Text } from "@mantine/core";
import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: number;
    image: string;
    title: string;
    date: string;
  };
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
      p={0}
      my={"lg"}
      shadow="0"
    >
      <Grid>
        <Grid.Col span={3}>
          <Image src={blog.image} alt="blog image" height={"92px"} />
        </Grid.Col>
        <Grid.Col span={9}>
          <Link
            href="#"
            color="black"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Text fw={500} lh={"40px"}>
              {blog.title}
            </Text>
          </Link>
          <Text color={"#5E6D77"} size={"sm"}>
            {blog.date}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
