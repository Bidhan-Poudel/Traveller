import { Badge, Box, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./ArticleCard.module.css";
import { ArticleProps } from "@/app/home/mock/article";
import { IconCircle } from "@tabler/icons-react";
import { checkColour } from "../../utils/checkColour";

export const ArticleCard: React.FC<ArticleProps> = ({ data }) => {
  const color = checkColour(data.type);
  return (
    <Card withBorder padding="0" pb={"md"} radius="lg" className={classes.card}>
      <Card.Section mb={"xs"} pos={"relative"}>
        <Image
          src={data.image}
          alt={data.title}
          height={200}
          pos={"relative"}
          className={classes.image}
        />
      </Card.Section>
      <Box px={"lg"} pt={"md"}>
        <Badge
          color={checkColour(data.type)}
          variant="light"
          radius="xl"
          size="lg"
        >
          <Group gap={5}>
            <IconCircle size={8} fill={checkColour(data.type)} />
            {data.type}
          </Group>
        </Badge>
        <Text fz={"lg"} fw={"bold"} mt={"md"} lineClamp={2} lh={"xs"}>
          {data.title}
        </Text>
        <Text fz={"md"} mt={"xs"} c={"#5E6D77"} lineClamp={2} lh={"xs"}>
          {data.body}
        </Text>
      </Box>
    </Card>
  );
};

