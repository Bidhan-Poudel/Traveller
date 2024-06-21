"use client";

import {
  Group,
  Button,
  Center,
  Box,
  Burger,
  Menu,
  Text,
  Drawer,
  Divider,
} from "@mantine/core";

import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconChevronDown,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { links, currencies } from "../config";
import Link from "next/link";
import { useState } from "react";

const NavbarItems = ({ items }:any) => {
  return items.map((link:any) => {
    console.log(link);
    const subMenuItems = link.links?.map((item:any) => (
      <Menu.Item className={classes.subLink} key={item.link}>
        <Text size="md" lh={2} px={"sm"} pt={"sm"}>
          {item.label}
        </Text>
      </Menu.Item>
    ));
    if (subMenuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 2 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown w={240}>{subMenuItems}</Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });
};

const CurrencyMenu = ({ currencies }:any) => (
  <Menu trigger="click">
    <Menu.Target>
      <Link
        href={"#"}
        onClick={(event) => event.preventDefault()}
        className={classes.currencyLink}
      >
        <Center>
          <Text fz={14} fw={""} >
            USD
          </Text>
          <IconChevronDown size="0.9rem" stroke={1.5} />
        </Center>
      </Link>
    </Menu.Target>
    <Menu.Dropdown>
      {currencies.map((currency:any) => (
        <Menu.Item key={currency} lh={3} px={20}>
          {currency}
        </Menu.Item>
      ))}
    </Menu.Dropdown>
  </Menu>
);

const HeaderActions = (isExtraSmallSize:any) => (
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

const DrawerItems = ({ links, handleLinkClick, closeDrawer, activeLink }:any) => {
  return links.map((link:any) => {
    const menuItems = link.links?.map((item:any) => (
      <Menu.Item
        key={item.link}
        className={classes.subLink}
        onClick={() => closeDrawer()} // Close the drawer when a sublink is clicked
      >
        <Text size="md" lh={2} px={"sm"} pt={"sm"}>
          {item.label}
        </Text>
        <Divider />
      </Menu.Item>
    ));

    return (
      <Menu key={link.label}>
        <Link
          href={"#"}
          onClick={(event) => {
            event.preventDefault();
            handleLinkClick(link.label);
          }}
          className={classes.link}
          style={{ textDecoration: "none" }}
        >
          <Text size="md" lh={2} px={"sm"} pt={"sm"}>
            {link.label}
            {link.links && <IconChevronDown size="0.9rem" stroke={1.5} />}
          </Text>
        </Link>
        <Divider />
        {activeLink === link.label && menuItems && <div>{menuItems}</div>}
      </Menu>
    );
  });
};

export const HeaderNavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const isMediumSize = useMediaQuery("(min-width: 992px)");
  const isExtraSmallSize = useMediaQuery("(max-width: 576px)");

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link:any) => {
    setActiveLink(activeLink === link ? null : link);
  };

  return (
    <Box>
      <Box
        bg={isMediumSize ? "#333333b7" : "white"}
        className={classes.header}
        c={isMediumSize ? "white" : "black"}
      >
        <Group h="100%" justify="space-around" lh={5}>
          <Group gap={10}>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="lg"
              color={isMediumSize ? "white" : "black"}
              size={20}
            />
            <MantineLogo
              size={isMediumSize ? 50 : isExtraSmallSize ? 20 : 30}
            />
          </Group>

          <Group gap={16} visibleFrom="lg">
            <NavbarItems items={links} />
          </Group>

          <Group visibleFrom="md">
            <Group>
              <CurrencyMenu currencies={currencies} />
            </Group>
            <Button variant="default" className={classes.button}>
              <IconShoppingBag stroke={1.5} />
            </Button>
            <Button variant="default" className={classes.button}>
              <IconUser />
            </Button>
            <Button
              radius={"xl"}
              h={44}
              color="#FFF"
              bg={"#3b71fe"}
              size={"20"}
            >
              <Text size="md">Become a host</Text>
            </Button>
          </Group>
          <HeaderActions isExtraSmallSize={isExtraSmallSize} />
        </Group>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="95%"
        padding="md"
        title="Mantine"
        hiddenFrom="xl"
        zIndex={100}
        c={"black"}
      >
        <Divider my={"sm"} />
        <DrawerItems
          links={links}
          handleLinkClick={handleLinkClick}
          closeDrawer={closeDrawer}
          activeLink={activeLink}
        />
      </Drawer>
    </Box>
  );
};
