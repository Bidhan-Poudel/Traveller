import React from "react";

import { CardAuthor, blogs, checkColour } from "@/app/shared";
import { Badge, Box, Card, Group, Image, Text, Title } from "@mantine/core";
import { IconCircle } from "@tabler/icons-react";

type blogProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
};

export const BlogsCard = ({ blog }: { blog: blogProps }) => {
  return (
    <Card withBorder shadow="lg" p={0} radius={"lg"} mb={"xl"}>
      <Card.Section>
        <Image src={blog.image} alt={blog.title} height={"500px"} fit="cover" />
      </Card.Section>
      <Box mt={"xl"} px={"xl"} mb={"sm"}>
        <Badge
          color={checkColour(blog.category)}
          variant="light"
          radius="xl"
          size="lg"
        >
          <Group gap={5}>
            <IconCircle size={8} fill={checkColour(blog.category)} />
            {blog.category}
          </Group>
        </Badge>

        <Title fz={"h2"} my={"lg"}>
          {blog.title}
        </Title>

        <Text my={"lg"} c={"#5E6D77"} lineClamp={3} lh={"xs"}>
          {blog.description}
        </Text>

        <CardAuthor />
      </Box>
    </Card>
  );
};
