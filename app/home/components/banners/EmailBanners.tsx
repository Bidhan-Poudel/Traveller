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
  Card,
  Stack,
} from "@mantine/core";
import classes from "./EmailBanner.module.css";
import { useMediaQuery } from "@mantine/hooks";
import {
  emailBannerImage,
  emailBannerText,
  emailBannerTitle,
} from "../../mock";

export const EmailBanner = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const isMedium = useMediaQuery("(min-width: 992px)");
  return (
    <Container size={"xl"} mt={"120"} p={"sm"}>
      <Card withBorder p={0}>
        <Group
          justify="space-between"
          bg={
            "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
          }
          className={classes.group}
        >
          <Image
            src={emailBannerImage}
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
              {emailBannerTitle}
            </Title>

            <Text
              ta="center"
              mt="xs"
              fz={isMedium ? "md" : "sm"}
              c={"dimmed"}
              w={isMedium ? "80%" : "100%"}
            >
              {emailBannerText}
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
                className={classes.button}
                size={isMobile ? "xs" : "md"}
                radius={"xl"}
                mt={isMobile ? 3 : 5}
                mr={isMobile ? 4 : 8}
              >
                Subscribe
              </Button>
            </div>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
};
{
  /* <Grid
          justify="center"
          w={"100%"}
          align="center"
          bg={
            "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
          }
          p={0}
        >
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Image
              src={emailBannerImage}
              alt="image"
              radius={isMobile ? "10 10 0 0" : "10 0 0 10"}
              h={"100%"}
              variant="fill"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Group justify="center" gap={"lg"} align="c">
              <Title
                order={1}
                lh={isMedium ? "46px" : "38px"}
                ta="center"
                fz={isMedium ? "36px" : "28px"}
              >
                {emailBannerTitle}
              </Title>

              <Text
                ta="center"
                mt="xs"
                fz={isMedium ? "md" : "sm"}
                c={"dimmed"}
                w={{ base: "100%" }}
                lh={"26px"}
              >
                {emailBannerText}
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
                  className={classes.button}
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
    </Container> */
}
//   );
// };
