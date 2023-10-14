import { MantineProvider } from "@mantine/core";
import { dark_theme, light_theme } from "./Themes";
import { themeAtom } from "../atoms/theme_atom";

type ConfingProps = {
  children: React.ReactNode;
};

export default function Confing({ children }: ConfingProps) {
  const theme = themeAtom.use("theme") === "dark" ? dark_theme : light_theme;
  return (
    <MantineProvider defaultColorScheme={themeAtom.use("theme")} theme={theme}>
      {children}
    </MantineProvider>
  );
}
