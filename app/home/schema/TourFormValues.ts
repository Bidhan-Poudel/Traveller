import { UseFormReturnType } from "@mantine/form";
import { CommonFormValues } from "./CommonInteface";


 export interface TourFormValues extends CommonFormValues {
  noOfTravellers: number;
}

 export interface TourFormInputProps {
  form: UseFormReturnType<TourFormValues>;
}