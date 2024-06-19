"use client";
import { Tabs } from "@mantine/core";
import React from "react";
import classes from "./FormTabs.module.css";
import { HotelForm, TourForm } from "../forms";


export const FormTabs = () => {
  return (
      <Tabs
        defaultValue="Hotel"
        className={classes.tabs}
        variant="pills"
        c={"white"}
        pos={"relative"}
        top={-100}
      >
        <Tabs.List className={classes.tabList} justify="center">
          <Tabs.Tab value="Hotel" className={classes.tab}>
            Hotel
          </Tabs.Tab>
          <Tabs.Tab value="Tours" className={classes.tab}>
            Tours
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Hotel" mt={"20"} >
          <HotelForm />
        </Tabs.Panel>
        <Tabs.Panel value="Tours" mt={"20"}>
          <TourForm />
        </Tabs.Panel>
      </Tabs>
  );
};

