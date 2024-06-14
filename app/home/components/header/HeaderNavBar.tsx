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
  ScrollArea,
  Divider,
  rem,
} from "@mantine/core";

import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconChevronDown,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { links, currencies } from "../../mock/menu";
import Link from "next/link";
import { useState } from "react";

export const HeaderNavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const isMediumSize = useMediaQuery("(min-width: 992px)");
  const isExtraSmallSize = useMediaQuery("(max-width: 576px)");

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link: any) => {
    if (activeLink === link) {
      setActiveLink(null);
      if (links.find((items) => items.label === link).links) closeDrawer(); // Close the drawer if the link has no sublinks
    } else {
      setActiveLink(link); // Set the active link
    }
  };

  const drawerItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.link}
        className={classes.subLink}
        onClick={() => closeDrawer()} // Close the drawer when a sublink is clicked
      >
        <Text size="md" lh={2} px={"sm"} pt={"sm"}>
          {item.label}
        </Text>
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
        {activeLink === link.label && menuItems && <div>{menuItems}</div>}
      </Menu>
    );
  });

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item className={classes.subLink} key={item.link}>
        <Text size="md" lh={2} px={"sm"} pt={"sm"}>
          {item.label}
        </Text>
      </Menu.Item>
    ));

    if (menuItems) {
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
          <Menu.Dropdown w={240}>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event: any) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  const currencyItems = currencies.map((currency) => (
    <Menu.Item key={currency} lh={3} px={20}>
      {currency}
    </Menu.Item>
  ));

  return (
    <Box>
      <Box
        bg={isMediumSize ? "#333333b7" : "white"}
        className={classes.header}
        c={isMediumSize ? "white" : "black"}
      >
        <Group h="100%" justify="space-around" lh={5}>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
            color={"black"}
            size={20}
          />
          <MantineLogo size={isMediumSize ? 50 : isExtraSmallSize ? 20 : 30} />

          <Group gap={16} visibleFrom="lg">
            {items}
          </Group>

          <Group visibleFrom="md">
            <Menu
              trigger="click"
              transitionProps={{ exitDuration: 0 }}
              withinPortal
            >
              <Menu.Target>
                <Link
                  href="#"
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <Text fz={14} fw={""}>
                      USD
                    </Text>
                    <IconChevronDown size="0.9rem" stroke={1.5} />
                  </Center>
                </Link>
              </Menu.Target>
              <Menu.Dropdown>{currencyItems}</Menu.Dropdown>
            </Menu>
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
          <Group hiddenFrom="md" gap={isExtraSmallSize ? 1 : 3}>
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
        </Group>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="95%"
        padding="md"
        title="Mantine"
        hiddenFrom="md"
        zIndex={100}
        c={"black"}
      >
        <ScrollArea h={`calc(100vh-${rem(80)}`} mx="-md">
          <Divider my={"sm"} />
          <div>{drawerItems}</div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
