import {
  Anchor,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  Text,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),
    width: "100%",
    padding: "0 35px",

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderComponent() {
  const links = [
    {
      link: "",
      label: "Trang chủ",
    },
    {
      link: "/gioi-thieu",
      label: "Giới thiệu",
    },
  ];
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <div className="bg-[url('/images/bg-footer.jpg')]">
        <Image src="/images/bg-header.jpg" alt="bg-header" />
      </div>
      <Header height={56} mb={"xl"}>
        <div className={classes.inner}>
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
          <Group align="center">
            <Anchor href={"/"}>
              <Image
                src={"/images/logo.jpg"}
                alt="logo"
                height={32}
                width={32}
              />
            </Anchor>
            <Text fw={600} fz="lg" color={theme.colors.blue[6]}>
              Trung Tâm Bồi Dưỡng Văn Hoá Trần Phú
            </Text>
          </Group>
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <Button variant="outline">
              <Link href={"http://localhost:5173/login"}>Đăng nh</Link>
            </Button>
          </Group>
        </div>
      </Header>
    </>
  );
}
