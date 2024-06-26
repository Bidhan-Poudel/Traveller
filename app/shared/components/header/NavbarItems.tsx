import React from 'react'
import { Center, Menu, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import classes from "./HeaderMegaMenu.module.css";


type item = {
    label: string;
    link: string;
    links?: item[];
  };

export const NavbarItems = ({ items }: { items: item[] }) => {
    return items.map((link: item) => {
      const subMenuItems = link.links?.map((item: item) => (
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
        <Link key={link.label} href={link.link} className={classes.link}>
          {link.label}
        </Link>
      );
    });
  };
