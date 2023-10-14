import { atom, Atom } from "@mongez/react-atom";

type ThemeType = {
  theme: "light" | "dark";
};

export const themeAtom: Atom<ThemeType> = atom({
  key: "Theme",
  default: {
    theme: "light" as ThemeType["theme"],
  },
});
