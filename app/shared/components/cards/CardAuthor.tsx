import { Avatar, Group, Text } from "@mantine/core";
import React from "react";
import { blogs } from "../../mock";

export const CardAuthor = () => {
  return (
    <Group gap={"sm"} my={"xl"}>
      <Avatar src={blogs[0].avatar} radius="xl" size={"lg"} />
      <Text fz="md" c={"#5E6D77"}>
        BY{" "}
        <Text fz="md" span c={"black"} fw={"500"}>
          {" "}
          {blogs[0].author}
        </Text>
      </Text>
      <Text fz={"sm"} fw={"lighter"} c={"#5E6D77"}>
        |
      </Text>
      <Text c={"#5E6D77"} fz={"sm"}>
        {blogs[0].date},
        <Text ml={"xs"} fz={"sm"} fw={"lighter"} c={"#5E6D77"} span>
          {blogs[0].time}
        </Text>
      </Text>
    </Group>
  );
};
