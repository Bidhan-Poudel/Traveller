import { Card, Image } from "@mantine/core";
import React from "react";

export const ImageCard = () => {
  return (
    <Card shadow="sm" my={"xl"} withBorder radius={"lg"}>
      <Image
        src={
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png"
        }
        alt="hotel image"
        width={500}
        height={300}
      />
    </Card>
  );
};
