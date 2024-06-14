import { UseFormReturnType } from "@mantine/form";
import { CommonFormValues } from "./CommonInteface";


export interface HotelFormValues extends CommonFormValues {
  checkIn: Date | null;
  checkOut: Date | null;
  rooms: number;
  adults: number;
  children: number;
}

export interface HotelFormInputProps {
  form: UseFormReturnType<HotelFormValues>;
}
