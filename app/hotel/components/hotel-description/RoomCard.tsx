import {
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBed, IconMoodBoy, IconUser } from "@tabler/icons-react";
import React from "react";
import CustomBotton from "../buttons/Buttons";
import classes from "./RoomCard.module.css";

export const RoomCard: React.FC<{ room: Object }> = ({ room }) => {
  return (
    <Card
      shadow="xs"
      radius="md"
      p={0}
      style={{ width: "100%" }}
      withBorder
      mb={"sm"}
    >
      <Grid p={0}>
        <Grid.Col span={{ md: 4 }}>
          <Image
            src={
              "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/3-restaurants-breakfast-lunch-and-dinner-served-Chinese-cuisine-1.png"
            }
            alt="room"
            variant="cover"
            h="100%"
          />
        </Grid.Col>
        <Grid.Col span={{ md: 5 }} className={classes.midColumn}>
          <Box className={classes.box}>
            <Title fz={"h4"} className={classes.title}>
              {room.name}
            </Title>
            <Group>
              <Stack gap={5}>
                <Paper
                  className={classes.featuresButton}
                  variant="outline"
                  shadow="xs"
                >
                  <IconBed size={24} stroke={1.5} color="black" />
                </Paper>
                <Text ta={"center"} fz={"sm"} c={"#5E6D77"}>
                  x{room.beds}
                </Text>
              </Stack>
              <Stack gap={5}>
                <Paper
                  className={classes.featuresButton}
                  variant="outline"
                  shadow="xs"
                >
                  <IconUser size={24} stroke={1.5} color="black" />
                </Paper>
                <Text ta={"center"} fz={"sm"} c={"#5E6D77"}>
                  x{room.guests}
                </Text>
              </Stack>
              <Stack gap={5}>
                <Paper
                  className={classes.featuresButton}
                  variant="outline"
                  shadow="xs"
                >
                  <IconMoodBoy size={24} stroke={1.5} color="black" />
                </Paper>
                <Text ta={"center"} fz={"sm"} c={"#5E6D77"}>
                  x{room.children}
                </Text>
              </Stack>
            </Group>
            {/* </Stack> */}
          </Box>
        </Grid.Col>
        <Grid.Col span={{ md: 3 }}>
          {/* <Stack h={"100%"} justify="center" align="center" gap={8}>
            <Group gap={0}>
              <Title fz={"16px"} lh={"26px"}>
                $200.00
              </Title>
              <Text fz={"14px"} lh={"22px"} c={"#5E6D77"}>
                /night
              </Text>
            </Group>
            <CustomBotton>View Room</CustomBotton>
          </Stack> */}

          <Box className={classes.pay}>
            <Group gap={0}>
              <Title fz={"16px"} lh={"26px"}>
                $200.00
              </Title>
              <Text fz={"14px"} lh={"22px"} c={"#5E6D77"}>
                /night
              </Text>
            </Group>
            <CustomBotton>View Room</CustomBotton>
          </Box>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
