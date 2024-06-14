"use client";

import {
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  rem,
  Box,
  Grid,
  Container,
} from "@mantine/core";
import {
  IconClock,
  IconCurrencyEuro,
  IconHeart,
  IconMapPin,
  IconStar,
} from "@tabler/icons-react";
import classes from "./ArticleCard.module.css";
import { tours } from "@/app/home/mock/tours";

export const TourCard = () => {
  return (
    <Container size={"xl"} p={"sm"}>
      <Grid>
        {tours.map((tour) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={tour.id}>
            <Card withBorder p={"sm"} radius="lg" className={classes.card}>
              <Card.Section mb="sm" pos={"relative"}>
                <IconHeart className={classes.heartIcon} color="white" />
                <Image
                  src={tour.image}
                  alt={tour.title}
                  height={280}
                  pos={"relative"}
                  className={classes.image}
                />
                <Avatar
                  src={tour.avatar}
                  radius="lg"
                  pos={"absolute"}
                  right={16}
                  bottom={-12}
                />
              </Card.Section>

              <Box  pt={"sm"}>
                <Group gap={2}>
                  <IconMapPin
                    style={{ width: rem(20), height: rem(20) }}
                    color={"#5E6D77"}
                  />
                  <Text w="fit-content" c={"#5E6D77"} fz={"sm"}>
                    {tour.address}
                  </Text>
                </Group>

                <Text fw={700} mt="xs" lts={"20"} fz={"lg"}>
                  {tour.title}
                </Text>

                <Group my="sm" gap={4}>
                  <IconStar
                    style={{ width: rem(20), height: rem(20) }}
                    color="orange"
                    fill="orange"
                  />
                  <Text fw={"bold"}>{tour.rating}</Text>
                  <Text fw={"lighter"} ml={4} c={"#5E6D77"} fz={"sm"}>
                    ({tour.noOfReviews} Reviews)
                  </Text>
                </Group>

                <Card.Section className={classes.footer} pt={"xl"} pb={"md"}>
                  <Group justify="space-between" pt={"sm"}>
                    <Group gap={0}>
                      <Text fw={400} mr={8} c={"#5E6D77"} fz="sm">
                        From
                      </Text>
                      <IconCurrencyEuro
                        style={{ width: rem(20), height: rem(20) }}
                      />
                      <Text fz="md" fw={700} ml={-4}>
                        {tour.price}
                      </Text>
                    </Group>
                    <Group gap={0}>
                      <ActionIcon variant="subtle" color="gray">
                        <IconClock
                          style={{ width: rem(20), height: rem(20) }}
                          color={"#5E6D77"}
                        />
                      </ActionIcon>
                      <Text c={"#5E6D77"}>{tour.time}</Text>
                    </Group>
                  </Group>
                </Card.Section>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
