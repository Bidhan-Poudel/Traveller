import { Badge, Box, Group, Image, Text } from "@mantine/core";
import React from "react";
import { IconCircleFilled } from "@tabler/icons-react";
import { CardAuthor, blogs } from "@/app/shared";

export const BlogLeftSection = () => {
  return (
    <Box my={"40"} px={"sm"}>
      <Image src={blogs[0].image} alt="blog image" mb={"xl"} />
      <Badge variant="light" color="blue.9" size="lg" radius={"xl"} my={"lg"}>
        <Group align="center" gap={"5"}>
          <IconCircleFilled size={8} />
          {blogs[0].category}
        </Group>
      </Badge>
      <CardAuthor />
      <Text fz={"md"} mt={"md"} lh={"xl"} my={"xl"}>
        {blogs[0].description}
      </Text>
    </Box>
  );
};
