import { Button, Group, Input, Menu, Text } from "@mantine/core";
import { IconMinus, IconPlus, IconUserFilled } from "@tabler/icons-react";
import React from "react";
import classes from "./Travellers.module.css";
import { TourFormInputProps } from "../../schema";

export const Travellers: React.FC<TourFormInputProps> = ({ form }) => {
  //   console.log(form);
  const noOfTravellers = form.values.noOfTravellers;

  const onAddButtonClick = (state: "noOfTravellers") => {
    form.setFieldValue(state, form.values[state] + 1);
  };

  const onSubtractButtonClick = (state: "noOfTravellers") => {
    form.setFieldValue(state, form.values[state] - 1);
  };
  return (
    <Group gap={0} flex={"start"}>
      <IconUserFilled size={24} color="#5E6D77" stroke={1.5} />
      <Menu>
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
              No. Of Travellers
            </Text>
            <Text c={"gray.6"} fw={300} fz={"sm"} pt={"12"}>
              {noOfTravellers} Travellers
            </Text>
          </Input>
        </Menu.Target>
        <Menu.Dropdown p={32}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr ",
              gap: "8px",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <Text>No. Of Travellers</Text>
            <Group>
              <IconMinus
                size={20}
                onClick={() => onSubtractButtonClick("noOfTravellers")}
              />
              <Text>{noOfTravellers}</Text>
              <IconPlus
                size={20}
                onClick={() => onAddButtonClick("noOfTravellers")}
              />
            </Group>
          </div>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};
