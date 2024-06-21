import { Autocomplete, Group } from "@mantine/core";
import classes from "./Autocomplete.module.css";
import { IconMapPin } from "@tabler/icons-react";
import { SearchAutoCompleteProps } from "../../schema";
import { data } from "../../mock/SearchLocation";

export const SearchAutoComplete: React.FC<SearchAutoCompleteProps> = ({
  form,
}) => {
  console.log(form.values.location);
  return (
    <Group>
      <IconMapPin size={24} color="#5E6D77" stroke={1.5} />
      <Autocomplete
        variant="unstyled"
        label="Location"
        c={"black"}
        placeholder="Where are you going?"
        size="md"
        radius={"md"}
        data={data}
        className={classes.autocomplete}
        value={form.values.location}
        onChange={(value) => form.setFieldValue("location", value)}
        inputSize="xl"
        flex={1}
      />
    </Group>
  );
};
