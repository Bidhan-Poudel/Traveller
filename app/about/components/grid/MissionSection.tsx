import { Text, Title } from "@mantine/core";
import React from "react";
import { aboutCompany, aboutData } from "../../mock";

export const MissionSection = () => {
  return (
    <>
      <Title fz={"h4"} mb={"xl"}>
        {aboutData.mission}
      </Title>
      <Text c={"#5E6D77"} mb={"xl"}>{aboutCompany.mission}</Text>
    </>
  );
};
