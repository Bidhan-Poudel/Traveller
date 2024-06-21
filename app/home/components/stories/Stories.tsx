import { Container, Title } from "@mantine/core";
import React from "react";
import { ArticleCarousel } from "../carousels/ArticleCarousel";
import { storiesTitle } from "../../mock";

export const Stories = () => {
  return (
    <Container bg={"white"} mt={"80"} px="sm" size={"xl"}>
      <Title order={4} ta={"left"} fz={36} mb={"60"}>
        {storiesTitle}
      </Title>
      <ArticleCarousel />
    </Container>
  );
};

