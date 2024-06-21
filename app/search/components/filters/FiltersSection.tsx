"use client";
import {
  Checkbox,
  Container,
  Flex,
  Group,
  Pagination,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import MenuButtons from "../custom-components/MenuButtons";
import { HotelCardContainer } from "@/app/home/components/cards";
import { IconGripHorizontal, IconGripVertical } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export const FiltersSection = () => {
  const [view, setView] = useState("horizontal");

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleViewChange = (value: string) => {
    setView(value);
  };

  return (
    <>
      <Container my={"60"} size={"lg"}>
        <Group justify="space-between" my={"xl"}>
          <Group>
            <Text c={"#5E6D77"}>{8} hotels found</Text>
          </Group>
          <Group gap={"xl"}>
            <Group gap={"xs"}>
              <Text>Filter By:</Text>
              <Checkbox label="Special Offers" />
            </Group>
            <Group gap={"xs"}>
              <Text>Sort By:</Text>
              <MenuButtons />
              {!isMobile &&
                (view === "horizontal" ? (
                  <IconGripVertical
                    size={20}
                    onClick={() => handleViewChange("vertical")}
                  />
                ) : (
                  <IconGripHorizontal
                    size={20}
                    onClick={() => handleViewChange("horizontal")}
                  />
                ))}
            </Group>
          </Group>
        </Group>
      </Container>
      <HotelCardContainer size={"lg"} view={view} />
      <Flex justify={"center"} mt={60}>
        <Pagination total={3} disabled gap={"lg"} />
      </Flex>
    </>
  );
};
