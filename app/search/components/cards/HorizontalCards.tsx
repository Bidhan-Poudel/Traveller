import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Rating,
  Text,
  rem,
} from "@mantine/core";
import { IconCurrencyDollar, IconHeart } from "@tabler/icons-react";
import classes from "./HorizontalCards.module.css";
import Link from "next/link";
import React from "react";

export const HorizontalCards = ({
  hotel,
}: {
  hotel: {
    image: string;
    name: string;
    avatar: string;
    noOfReviews: number;
    reviews: string;
    address: string;
    rating: number;
    price: number;
  };
  size: number;
}) => {
  return (
    <Card withBorder radius="lg" className={classes.card} p={0}>
      <Grid pos={"relative"}>
        <Grid.Col span={{ xs: 4 }} pos={"relative"}>
          <Card.Section pos={"relative"} className={classes.imageWrapper}>
            <IconHeart className={classes.heartIcon} color="white" />
            <Link href={`/hotel`}>
              <Image
                src={hotel.image}
                alt={hotel.name}
                height={"100%"}
                pos={"relative"}
                className={classes.image}
              />
              <Avatar
                src={hotel.avatar}
                radius="lg"
                pos={"absolute"}
                right={20}
                bottom={20}
              />
            </Link>
          </Card.Section>
        </Grid.Col>
        <Grid.Col span={{ xs: 8 }}>
          <Box p={"lg"}>
            <Rating
              value={hotel.rating}
              color={"orange"}
              readOnly
              size={"xs"}
            />
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
        </Grid.Col>
      </Grid>
    </Card>
  );
};
