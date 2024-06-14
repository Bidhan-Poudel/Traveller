import { Box, Divider, Group, Image, Rating, Stack, Text } from "@mantine/core";
import React from "react";
import { userReviews } from "../../mock";

export const UserReview = () => {
  return (
    <Box>
      {userReviews.map((user) => (
        <Box my={40}>
          <Divider my={20} />
          <Group>
            <Image src={user.avatar} alt={user.name} h={"52px"} radius="xl" />
            <Stack gap="0">
              <Text>{user.name}</Text>
              <Text c={"#5E6D77"} fz={"sm"}>
                {user.date}
              </Text>
            </Stack>
          </Group>
          <Rating value={user.rating} my={"lg"} />
          <Text c={"#74818a"}>{user.review}</Text>
        </Box>
      ))}
    </Box>
  );
};
