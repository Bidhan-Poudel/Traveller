import { Button, Card, Divider, Group, TextInput, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export const SearchForm = () => {
  return (
    <Card
      withBorder
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
      p={"xl"}
      shadow="xl"
      my={"40"}
      radius={"xl"}
    >
      <Title fz={"h3"}>Search</Title>
      <Divider my={"xl"} />
      <Group pos={"relative"} w={"100%"} align="center">
        <TextInput
          placeholder="Search ..."
          size="lg"
          radius={"xl"}
          w={"100%"}
        />
        <Button
          variant="filled"
          color="blue"
          radius={"xl"}
          mt={"md"}
          pos={"absolute"}
          right={10}
          top={-10}
          size="sm"
          onClick={() => {
            console.log("Perform search");
          }}
        >
          <IconSearch color={"white"} />
        </Button>
      </Group>
    </Card>
  );
};
