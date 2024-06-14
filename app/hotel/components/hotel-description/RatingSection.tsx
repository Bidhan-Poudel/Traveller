import { Button, Card, Group, Rating, Stack, Text } from "@mantine/core";
import React from "react";
import { IconHeart, IconShare3 } from "@tabler/icons-react";
import { getReviewStatus } from "../../utils/getReviewStatus";
import { hotelDetail } from "../../mock";

export const RatingSection = () => {
  const hotel = hotelDetail[0];
  const rating = hotel.rating;

  const review = getReviewStatus(rating);
  return (
    <Card px={"sm"}>
      <Group justify="space-between">
        <Stack gap={"xs"}>
          <Rating value={hotel.rating} color={"orange"} readOnly size={"xs"} />
          <Group gap={20}>
            <Button
              size="xs"
              variant="outline"
              radius="sm"
              px={"xs"}
              c={"#3B71FE"}
            >
              <Text fz={"sm"} fw={"bold"}>
                {hotel.rating}
              </Text>
              <Text fz={"sm"} fw={"bold"}>
                /
              </Text>
              <Text fz={"sm"} fw={"bold"}>
                5
              </Text>
            </Button>
            <Text w="fit-content" c={"gray.9"} fw={"bold"}>
              {review}
            </Text>
            <Text c={"#3B71FE"}>({hotel.noOfReviews} Reviews)</Text>
            <Text w="fit-content" c={"#5E6D77"}>
              {hotel.address}
            </Text>
          </Group>
        </Stack>
        <Group>
          <Button
            radius="50%"
            size="md"
            variant="outline"
            color="gray.2"
            styles={(theme) => ({
              root: {
                width: 40,
                height: 40,
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            })}
          >
            <IconShare3 size={20} stroke={1.5} color="black" />
          </Button>
          <Button
            radius="50%"
            size="md"
            variant="outline"
            color="gray.2"
            styles={(theme) => ({
              root: {
                width: 40,
                height: 40,
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            })}
          >
            <IconHeart size={20} stroke={1.5} color="black" />
          </Button>
        </Group>
      </Group>
    </Card>
  );
};


