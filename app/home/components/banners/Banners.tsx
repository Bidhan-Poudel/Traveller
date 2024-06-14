"use client";

import { Card, SimpleGrid, Image, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Banners.module.css";

export const ImageActionBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");
  return (
    <Container size="xl" p="sm" my={"xl"}>
      <SimpleGrid cols={useMediaQuery("(max-width: 520px)") ? 1 : 2}>
        <Card
          className={classes.card}
          radius="xl"
          h={isMobile ? 180 : isMedium ? 200 : 300}
        >
          <Image
            src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png"
            alt="banner 1"
            className={classes.image}
          />
        </Card>

        <Card
          className={classes.card}
          radius="xl"
          h={isMobile ? 180 : isMedium ? 200 : 300}
        >
          <Image
            src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3150-min.png"
            alt="banner 2"
            className={classes.image}
          />
        </Card>
      </SimpleGrid>
    </Container>
  );
};
