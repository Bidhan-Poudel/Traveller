import { Grid, Group, Progress, Text } from "@mantine/core";
import React from "react";
import { bar } from "../../mock";

const ReviewBar = () => {
  return (
    <Grid>
      {bar.map((item) => (
        <Grid.Col span={{ md: 6 }}>
          <Grid align="center" justify="space-between">
            <Grid.Col span={3}>
              <Text>{item.name}</Text>
            </Grid.Col>
            <Grid.Col span={7}>
              <Progress
                value={item.value * 20}
                color="green"
                size={"sm"}
                radius={"md"}
                m={"sm"}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Text>{item.value}/5</Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ReviewBar;
