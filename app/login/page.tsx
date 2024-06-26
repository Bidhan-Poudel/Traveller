import { Card, Center, Group } from "@mantine/core";
import React from "react";
import { LoginCard } from "./components";

const Page = () => {
  return (
    <>
      <Group justify="center" align="center" h={"100vh"}>
        <LoginCard />
      </Group>
    </>
  );
};

export default Page;
