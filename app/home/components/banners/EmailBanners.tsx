"use client";
import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
  Group,
  Grid,
  Stack,
  Box,
  Card,
} from "@mantine/core";
import classes from "./EmailBanner.module.css";
import { useMediaQuery } from "@mantine/hooks";

export const EmailBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 1200px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  return (
    <Container size={"xl"} mt={"120"} p={"sm"}>
      <Card withBorder p={0}>
        {/* <Group
        justify="space-between"
        bg={
          "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
        }
        className={classes.group}
      >
        <Image
          src={
            "https://modmixmap.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png"
          }
          alt="image"
          w={isMobile ? "100%" : "49%"}
          width={isMedium ? "49%" : isMobile ? "100%" : "40%"}
          radius={isMobile ? "10 10 0 0" : "10 0 0 10"}
        />
        <Stack w={isMobile ? "100%" : "49%"} justify="center" align="center">
          <Title
            order={1}
            ta="center"
            w={isMedium ? "60%" : "100%"}
            fz={isMedium ? "h1" : "h3"}
          >
            Get special offers, and more from Traveler
          </Title>

          <Text
            ta="center"
            mt="xs"
            fz={isMedium ? "md" : "sm"}
            c={"dimmed"}
            w={isMedium ? "80%" : "100%"}
          >
            Subscribe to see secret deals prices drop the moment you sign up!
          </Text>
          <div className={classes.controls}>
            <TextInput
              placeholder="Email Address"
              classNames={{
                input: classes.input,
                root: classes.inputWrapper,
              }}
              size={isMobile ? "sm" : "lg"}
              radius={"xl"}
            />
            <Button
              className={classes.control}
              size={isMobile ? "xs" : "md"}
              radius={"xl"}
              mt={isMobile ? 3 : 5}
              mr={isMobile ? 4 : 8}
            >
              Subscribe
            </Button>
          </div>
        </Stack>
      </Group> */}
        <Grid justify="center" w={"100%"} align="center">
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Image
              src={
                "https://modmixmap.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png"
              }
              alt="image"
              radius={isMobile ? "10 10 0 0" : "10 0 0 10"}
              h={"100%"}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Group justify="center">
              <Title
                order={1}
                ta="center"
                w={isMedium ? "60%" : "100%"}
                fz={isMedium ? "h1" : "h3"}
              >
                Get special offers, and more from Traveler
              </Title>

              <Text
                ta="center"
                mt="xs"
                fz={isMedium ? "md" : "sm"}
                c={"dimmed"}
                w={isMedium ? "80%" : "100%"}
              >
                Subscribe to see secret deals prices drop the moment you sign
                up!
              </Text>
              <div className={classes.controls}>
                <TextInput
                  placeholder="Email Address"
                  classNames={{
                    input: classes.input,
                    root: classes.inputWrapper,
                  }}
                  size={isMobile ? "sm" : "lg"}
                  radius={"xl"}
                />
                <Button
                  className={classes.control}
                  size={isMobile ? "xs" : "md"}
                  radius={"xl"}
                  mt={isMobile ? 3 : 5}
                  mr={isMobile ? 4 : 8}
                >
                  Subscribe
                </Button>
              </div>
            </Group>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};
