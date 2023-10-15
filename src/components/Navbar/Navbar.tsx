import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Button,
  useMantineTheme,
  Image,
  Drawer,
  Stack,
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
  const [opened, { open, close }] = useDisclosure(false);

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
              <Center style={{ justifyContent: "start" }}>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown style={{ width: opened ? "100%" : "auto" }}>
            {menuItems}
          </Menu.Dropdown>
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

            <Button
              variant="default"
              radius={"xl"}
              style={{
                borderColor: theme.colors.main_color[0],
                color: theme.colors.main_color[0],
              }}
              hidden
              visibleFrom="sm"
            >
              Sign in
            </Button>
          </Group>

          <Drawer opened={opened} onClose={close} title="" size={"100%"}>
            <Stack gap={5}>{items}</Stack>

            <Button
              variant="default"
              radius={"xl"}
              style={{
                borderColor: theme.colors.main_color[0],
                color: theme.colors.main_color[0],
                marginTop:"10px"
              }}
            >
              Sign in
            </Button>
          </Drawer>

          <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
