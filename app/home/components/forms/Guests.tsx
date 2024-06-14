import { Group, Input, Menu, Stack, Text } from "@mantine/core";
import {IconMinus, IconPlus, IconUser } from "@tabler/icons-react";
import React from "react";
import classes from "./Guest.module.css";
import { HotelFormInputProps } from "../../schema";

export const Guests: React.FC<HotelFormInputProps> = ({ form }) => {
  const { rooms, adults, children } = form.values;

  const onAddButtonClick = (state: "rooms" | "adults" | "children") => {
    form.setFieldValue(state, form.values[state] + 1);
  };

  const onSubtractButtonClick = (state: "rooms" | "adults" | "children") => {
    form.setFieldValue(state, form.values[state] - 1);
  };

  const borderBottom = {
    borderBottom: "1px solid #e0e0e0",
  };

  return (
    <Group gap={0} flex={"start"}>
      <IconUser size={24} color="#5E6D77" stroke={1.5} />
      <Menu >
        <Menu.Target>
          <Input
            component="button"
            variant="white"
            pointer
            className={classes.button}
            size="xl"
            px={0}
          >
            <Text c={"black"} fw={500}>
              Guests
            </Text>
            <Text c={"gray.6"} fw={300} fz={"sm"} pt={"12"}>
              {rooms} Rooms, {adults} Adults
            </Text>
          </Input>
        </Menu.Target>
        <Menu.Dropdown p={32}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr ",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <Text pb={20} style={borderBottom}>
              Rooms
            </Text>
            <Group pb={20} style={borderBottom}>
              <IconMinus
                size={20}
                onClick={() => onSubtractButtonClick("rooms")}
              />
              <Text>{rooms}</Text>
              <IconPlus size={20} onClick={() => onAddButtonClick("rooms")} />
            </Group>
            <Text py={20} style={borderBottom}>
              Adults
            </Text>
            <Group py={20} style={borderBottom}>
              <IconMinus
                size={20}
                onClick={() => onSubtractButtonClick("adults")}
              />
              <Text>{adults}</Text>
              <IconPlus size={20} onClick={() => onAddButtonClick("adults")} />
            </Group>
            <Text pt={20}>Children</Text>
            <Group pt={20}>
              <IconMinus
                size={20}
                onClick={() => onSubtractButtonClick("children")}
              />
              <Text>{children}</Text>
              <IconPlus
                size={20}
                onClick={() => onAddButtonClick("children")}
              />
            </Group>
          </div>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

