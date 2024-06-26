import { Button, Group } from "@mantine/core";
import { CurrencyMenu } from "./CurrencyMenu";
import { currencies } from "../../config";
import classes from "./HeaderMegaMenu.module.css";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";

export const HeaderActions = ({
  isExtraSmallSize,
}: {
  isExtraSmallSize?: boolean;
}) => (
  <Group hiddenFrom="md" gap={isExtraSmallSize ? 1 : 3}>
    <CurrencyMenu currencies={currencies} />
    <Button
      variant="default"
      className={classes.button}
      bd={isExtraSmallSize ? 0 : 1}
    >
      <IconShoppingBag stroke={1.5} size={isExtraSmallSize ? 20 : 30} />
    </Button>
    <Button
      variant="default"
      className={classes.button}
      bd={isExtraSmallSize ? 0 : 1}
    >
      <IconUser size={isExtraSmallSize ? 20 : 30} />
    </Button>
  </Group>
);
