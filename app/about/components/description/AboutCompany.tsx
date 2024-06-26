import { Box, Text, Title } from "@mantine/core";
import React from "react";
import { aboutCompany, aboutData } from "../../mock";

export const AboutCompany = () => {
  return (
    <Box mt={"80"} mb={"60"}>
      <Title fz={"28"} my={"lg"}>
        {aboutData.title}
      </Title>
      <Text c={"#5E6D77"} lh={"26px"}>
        {aboutCompany.aboutCompany}
      </Text>
    </Box>
  );
};
