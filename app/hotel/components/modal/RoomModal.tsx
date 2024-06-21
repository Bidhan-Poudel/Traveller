import { Grid, Modal, Title } from "@mantine/core";
import React from "react";
import { RoomsDetailLeft, RoomsDetailRight } from "../rooms-description";

export const RoomModal: React.FC<{
  opened: boolean;
  onClose: () => void;
  room: any;
}> = ({ opened, onClose, room }) => {
  return (
    <Modal opened={opened} onClose={onClose} size={"xl"} fullScreen>
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <RoomsDetailLeft />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <RoomsDetailRight />
        </Grid.Col>
      </Grid>
    </Modal>
  );
};
