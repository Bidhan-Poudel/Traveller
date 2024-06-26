import React from "react";
import { BookingForm } from "../form";
import { PaymentCard } from "../cards";
import { Divider } from "@mantine/core";

export const BookingLeftSection = () => {
  return (
    <>
      <BookingForm />
      <Divider my={20} />
      <PaymentCard />
    </>
  );
};
