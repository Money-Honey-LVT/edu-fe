import {
  ActionIcon,
  Container,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLocation,
  IconPhone,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data?: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterComponent({
  data = [
    {
      title: "About",
      links: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Pricing",
          link: "#",
        },
        {
          label: "Support",
          link: "#",
        },
        {
          label: "Forums",
          link: "#",
        },
      ],
    },
    {
      title: "Project",
      links: [
        {
          label: "Contribute",
          link: "#",
        },
        {
          label: "Media assets",
          link: "#",
        },
        {
          label: "Changelog",
          link: "#",
        },
        {
          label: "Releases",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "Join Discord",
          link: "#",
        },
        {
          label: "Follow on Twitter",
          link: "#",
        },
        {
          label: "Email newsletter",
          link: "#",
        },
        {
          label: "GitHub discussions",
          link: "#",
        },
      ],
    },
  ],
}: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
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

  return (
    <footer className="bg-[url('/images/bg-footer.jpg')]">
      <div className="py-6 px-28 flex items-center justify-between">
        <div className="text-white">
          <span className="text-xl">Giới thiệu</span>
          <div className="flex items-center gap-x-2">
            <IconLocation size={"0.8rem"} />
            <span>Địa chỉ: Số 24 P.Trần Phú, Máy Tơ, Ngô Quyền, Hải Phòng</span>
          </div>
          <div className="flex items-center gap-x-2">
            <IconPhone size={"0.8rem"} />
            <span>Điện thoại: 0944732266</span>
          </div>
        </div>
        {/* <div>
          <Image src={"/images/logo.jpg"} alt="logo" height={80} width={80} />
        </div> */}
      </div>
    </footer>
  );
}
