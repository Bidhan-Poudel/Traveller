import { Divider, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./HeaderMegaMenu.module.css";

type item = {
  label: string;
  link: string;
  links?: item[];
};

type DrawerItemsProps = {
  links: item[];
  handleLinkClick: (link: string) => void;
  closeDrawer: () => void;
  activeLink: string | null;
};

export const DrawerItems = ({
  links,
  handleLinkClick,
  closeDrawer,
  activeLink,
}: DrawerItemsProps) => {
  return links.map((link: any) => {
    const menuItems = link.links?.map((item: any) => (
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
