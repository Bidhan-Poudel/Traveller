"use client";

import {
  Card,
  Text,
  Group,
  Title,
  Container,
  Grid,
  Image,
} from "@mantine/core";
import classes from "./DestinationCard.module.css";
import { destinations } from "@/app/home/mock/destination";
import { topDestinationsTitle } from "../../mock";

export const DestinationsCard = () => {
  return (
    <Container size={"xl"} pb={80} px={"sm"}>
      <Title ta="center" my={72} fz={36} mb={48}>
        {topDestinationsTitle}
      </Title>
      <Grid>
        {destinations.map((destination) => (
          <Grid.Col span={{ xs: 6, lg: 4 }} key={destination.id}>
            <Card withBorder className={classes.card} radius="lg" p={"sm"}>
              <Image src={destination.image} className={classes.image} />
              <div className={classes.overlay} />

              <div className={classes.content}>
                <div>
                  <Text
                    fz={36}
                    className={classes.title}
                    fw={400}
                    ta={"center"}
                  >
                    {destination.name}
                  </Text>

                  <Group justify="center" gap="xs" ta={"center"}>
                    <Text size="md" className={classes.author}>
                      {destination.hotels} Hotels
                    </Text>
                    <Text size="md" className={classes.author}>
                      {destination.tours} Tours
                    </Text>
                    <Text size="md" className={classes.author}>
                      {destination.rentals} Rentals
                    </Text>
                    <Text size="md" className={classes.author}>
                      {destination.cars} Cars
                    </Text>
                    <Text size="md" className={classes.author}>
                      {destination.activities} Activities
                    </Text>
                  </Group>
                </div>
              </div>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
