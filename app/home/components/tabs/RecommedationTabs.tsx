"use client";

import { Flex, Tabs } from "@mantine/core";
import React from "react";
import classes from "./RecommedationTabs.module.css";
import { TourCard } from "../cards/TourCard";
import { HotelCardContainer } from "../cards/HotelCardContainer";

export const RecommedationTabs = () => {
  return (
    <Tabs variant="pills" defaultValue="Hotel" classNames={classes}>
      <Tabs.List justify="center" my={"xl"}>
        <Flex
          gap="sm"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap"
          mb={20}
        >
          <Tabs.Tab value="Hotel" p={"12 20"} fz={16}>
            Hotel
          </Tabs.Tab>
          <Tabs.Tab value="Tour" p={"12 20"} fz={16}>
            Tour
          </Tabs.Tab>
        </Flex>
      </Tabs.List>
      <Tabs.Panel value="Tour">
        <TourCard />
      </Tabs.Panel>
      <Tabs.Panel value="Hotel">
        <HotelCardContainer />
      </Tabs.Panel>
    </Tabs>
  );
};
