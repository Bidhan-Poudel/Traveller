"use client";

import { Text, Container, Group, rem, Title, Image } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import {
  suyatraFooter,
  serviceLinks,
  contactLinks,
} from "@/app/home/mock/footers";

export const Footer = () => {
  const serviceLink = serviceLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        fz={"md"}
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const contactLink = contactLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        fz="md"
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.icons} {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size={"xl"} mt={"lg"} mb={0} px={{md:"lg"}}>
        <div className={classes.logo}>
          <Title order={1} className={classes.title} fz={"36"} c={"#ac77ef"}>
            SuYatra
          </Title>
          <Text size="md" c="dimmed" className={classes.description}>
            {suyatraFooter.data}
          </Text>
          <Title mt={"44"} className={classes.groups} fz={"20"}>
            Socials
          </Title>
          <Group gap={10} mt={20}>
            <IconBrandFacebook size={24} stroke={1} />
            <IconBrandTwitter size={24} stroke={1} />
            <IconBrandInstagram size={24} stroke={1} />
            <IconBrandLinkedin size={24} stroke={1} />
          </Group>
        </div>
        <Group align="start">
          <div className={classes.serviceLink}>{serviceLink}</div>
          <div className={classes.contactLink}>{contactLink}</div>
        </Group>
      </Container>
      <Container className={classes.afterFooter} size={"xl"} py={"sm"}>
        <Text c="dimmed" size="sm">
          Copyright © 2024 SuYatra. All rights reserved.
        </Text>

        <Group
          gap={10}
          className={classes.social}
          wrap="nowrap"
          justify="center"
        >
          <Image
            src={
              "https://th.bing.com/th?id=OIP.eOZc1pvPpPPM_R-wceFMHAHaET&w=327&h=190&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            }
            style={{ width: rem(80), height: rem(30), objectFit: "contain" }}
          />
          <Image
            src={
              "https://th.bing.com/th?id=OIP.SDZANuSyS8OD3kYGfCBI7QAAAA&w=237&h=94&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            }
            style={{ width: rem(80), height: rem(48), objectFit: "contain" }}
          />
          <Image
            src={
              "https://th.bing.com/th/id/OIP.zqyRoAtlIB74QPYuiZe-EQAAAA?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
            style={{ width: rem(80), height: rem(38), objectFit: "contain" }}
          />
        </Group>
      </Container>
    </footer>
  );
};
