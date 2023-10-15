import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Button,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { images } from "../../constants/images";

const links = [
  { link: "/about", label: "Home" },
  { link: "/about", label: "Articles" },
  {
    link: "#1",
    label: "Pages",
    links: [
      { link: "/docs", label: "About us" },
      { link: "/resources", label: "Contact us" },
    ],
  },
  { link: "/about", label: "Pricing" },
  { link: "/pricing", label: "Faq" },
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const theme = useMantineTheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
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
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Image src={images.logo} alt="logo" />
          <Group>
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
          </Group>
            <Button
              variant="default"
              radius={"xl"}
              style={{
                borderColor: theme.colors.main_color[0],
                color: theme.colors.main_color[0],
              }}
            >
              Sign in
            </Button>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
