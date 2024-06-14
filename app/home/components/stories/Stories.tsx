import { Container, Title } from "@mantine/core";
import React from "react";
import { ArticleCarousel } from "../carousels/ArticleCarousel";

export const Stories = () => {
  return (
    <Container bg={"white"} mt={"80"} px="sm" size={"xl"}>
      <Title order={4} ta={"left"} fz={36} mb={"60"}>
        Stories, tips, and guides
      </Title>
      <ArticleCarousel />
    </Container>
  );
};

