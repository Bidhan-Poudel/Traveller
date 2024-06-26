import { Center, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./HeaderMegaMenu.module.css";

export const CurrencyMenu = ({ currencies }: { currencies: string[] }) => (
  <Menu trigger="click">
    <Menu.Target>
      <Link
        href={"#"}
        onClick={(event) => event.preventDefault()}
        className={classes.currencyLink}
      >
        <Center>
          <Text fz={14}>USD</Text>
          <IconChevronDown size="0.9rem" stroke={1.5} />
        </Center>
      </Link>
    </Menu.Target>
    <Menu.Dropdown>
      {currencies.map((currency: any) => (
        <Menu.Item key={currency} lh={3} px={20}>
          {currency}
        </Menu.Item>
      ))}
    </Menu.Dropdown>
  </Menu>
);
