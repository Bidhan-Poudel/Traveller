"use client";
import { useState } from "react";
import {
  Group,
  Button,
  Box,
  Burger,
  Text,
  Drawer,
  Divider,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";

import classes from "./HeaderMegaMenu.module.css";
import {
  NavbarItems,
  CurrencyMenu,
  HeaderActions,
  DrawerItems,
} from "../header";
import { links, currencies } from "../../config";

export const HeaderNavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const isMediumSize = useMediaQuery("(min-width: 992px)");
  const isExtraSmallSize = useMediaQuery("(max-width: 576px)");

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link: any) => {
    setActiveLink(activeLink === link ? null : link);
  };

  return (
    <>
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
    </>
  );
};
