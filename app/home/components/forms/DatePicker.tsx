import React from "react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./DatePicker.module.css";
import { Group } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import { HotelFormInputProps } from "../../schema";

export const DatePicker: React.FC<HotelFormInputProps> = ({ form }) => {
  const isSmall = useMediaQuery("(max-width: 768px)");

  return (
    <Group className={classes.group}>
      <IconCalendar size={24} color="#5E6D77" stroke={1.5} />
      <DatePickerInput
        label="Check In and Out Date"
        variant="unstyled"
        c={"black"}
        placeholder="Pick dates range"
        size="md"
        radius={"md"}
        type="range"
        flex={1}
        numberOfColumns={isSmall ? 1 : 2}
        className={classes.datePicker}
        minDate={new Date()}
        value={[form.values.checkIn, form.values.checkOut]}
        onChange={(dates) => {
          if (dates) {
            form.setFieldValue("checkIn", dates[0]);
            form.setFieldValue("checkOut", dates[1]);
          }
        }}
      />
    </Group>
  );
};
