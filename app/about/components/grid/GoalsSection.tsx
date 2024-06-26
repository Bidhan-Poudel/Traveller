import { Text, Title } from "@mantine/core";
import React from "react";
import { aboutCompany, aboutData } from "../../mock";

export const GoalsSection = () => {
  return (
    <>
      <Title fz={"h4"} mb={"xl"}>
        {aboutData.goals}
      </Title>
      <Text c={"#5E6D77"}>{aboutCompany.goals}</Text>
    </>
  );
};
