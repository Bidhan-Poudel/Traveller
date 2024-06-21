"use client";

import { Box, Flex, Pagination, Title } from "@mantine/core";
import React from "react";
import { RecommedationTabs } from "../tabs/RecommedationTabs";
import { recommendationTitle } from "../../mock";

export const Recommendation = () => {
  return (
    <Box bg={"light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"} mb={"0"} py={"80"}>
      <Title order={4} ta={"center"} fz={32} lts={1} px={10}>
        {recommendationTitle}
      </Title>
      <RecommedationTabs />
      <Flex justify={"center"} mt={60}>
        <Pagination total={3} disabled gap={"lg"} />
      </Flex>
    </Box>
  );
};

