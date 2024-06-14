// HotelImages.tsx
'use client';

import { RoomImageData } from "@/app/home/mock/roomimages";
import { Grid, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import ImageModal from "../modal/ImageModal";

export const HotelImages = () => {
  const mediumScreen = useMediaQuery("(max-width: 768px)");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Grid grow gutter={"xs"} px={"lg"} py={"xl"}>
        <Grid.Col span={{ md: 4, xs: 12 }}>
          <Image
            src={RoomImageData[0]}
            key={1}
            alt={"room image"}
            fit={"cover"}
            height={630}
            radius={"20 0 0 20"}
            onClick={() => handleImageClick(RoomImageData[0])}
          />
        </Grid.Col>
        <Grid.Col span={{ md: 8, xs: 0 }}>
          <Grid gutter={"xs"}>
            {RoomImageData.slice(1).map((image, index) => {
              let style = {};
              if (index === 1) {
                style = { borderTopRightRadius: "20px" };
              }
              if (index === RoomImageData.slice(1).length - 1) {
                style = { borderBottomRightRadius: "20px" };
              }
              return (
                <Grid.Col span={6} key={index}>
                  <Image
                    src={image}
                    alt={"room image"}
                    fit={"cover"}
                    style={style}
                    height={310}
                    onClick={() => handleImageClick(image)}
                  />
                </Grid.Col>
              );
            })}
          </Grid>
        </Grid.Col>
      </Grid>
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage || ''} />
    </>
  );
};
