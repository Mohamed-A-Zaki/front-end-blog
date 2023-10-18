import { atom } from "@mongez/react-atom";

type ThemeType = {
  theme: "light" | "dark";
};

export const themeAtom = atom<ThemeType>({
  key: "Theme",
  default: {
    theme: "light",
  },
});
