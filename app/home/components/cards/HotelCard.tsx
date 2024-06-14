import {
  Avatar,
  Box,
  Button,
  Card,
  Group,
  Image,
  Rating,
  Text,
  rem,
} from "@mantine/core";
import { IconCurrencyDollar, IconHeart } from "@tabler/icons-react";
import React from "react";
import classes from "./ArticleCard.module.css";
import Link from "next/link";

export const HotelCard = ({ hotel }) => {
  return (
    <Card withBorder p={"sm"} radius="lg" className={classes.card} m={2}>
      <Card.Section mb="xs" pos={"relative"}>
        <IconHeart className={classes.heartIcon} color="white" />
        <Link href={`/hotel`}>
          <Image
            src={hotel.image}
            alt={hotel.name}
            height={280}
            pos={"relative"}
            className={classes.image}
          />
          <Avatar
            src={hotel.avatar}
            radius="lg"
            pos={"absolute"}
            right={16}
            bottom={-12}
          />
        </Link>
      </Card.Section>

      <Box pt={"lg"}>
        <Rating value={hotel.rating} color={"orange"} readOnly size={"xs"} />
        <Text fw={700} mt="xs" lts={"20"} fz={20}>
          {hotel.name}
        </Text>
        <Text fz={"sm"} mt={"xs"} c={"#5E6D77"}>
          {hotel.address}
        </Text>

        <Card.Section pt={"md"} className={classes.footer}>
          <Group gap={10}>
            <Button size="xs" variant="outline" radius="sm">
              <Text mr={1} fz={"sm"} fw={"bold"}>
                {hotel.rating}
              </Text>
              <Text mr={1} fz={"sm"} fw={"bold"}>
                /
              </Text>
              <Text fz={"sm"} fw={"bold"}>
                5
              </Text>
            </Button>
            <Text w="fit-content" c={"gray.9"} fz={"sm"} fw={"bold"}>
              {hotel.reviews}
            </Text>
            <Text fz={"sm"} c={"#5E6D77"}>
              ({hotel.noOfReviews} Reviews)
            </Text>
          </Group>
          <Group gap={2} mt={"sm"} mb={"sm"}>
            <Text w="fit-content" c={"#5E6D77"} fz={"sm"}>
              From
            </Text>
            <IconCurrencyDollar
              style={{ width: rem(20), height: rem(20) }}
              color={"#5E6D77"}
            />
            <Text w="fit-content" c={"black"} fz={"lg"} fw={"bold"}>
              {hotel.price}
            </Text>
            <Text w="fit-content" c={"#5E6D77"} fz={"sm"}>
              / night
            </Text>
          </Group>
        </Card.Section>
      </Box>
    </Card>
  );
};
