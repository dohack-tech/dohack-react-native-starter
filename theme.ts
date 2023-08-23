import { createTheme } from "@shopify/restyle";

const palette = {
  greenLight: "#BEDF9D",
  greenPrimary: "#7ABF2E",
  greenDark: "#4F9600",

  oliveLight: "#BEDF9D",
  oliveDark: "#2B4005",

  yellowLight: "#FFF9E8",
  yellowDark: "#FFB800",

  blueLight: "#EBF8FF",
  blueDark: "#2B7EA8",

  gray80: "#414141",
  gray60: "#717171",
  gray40: "#929292",
  gray20: "#D0D0D0",
  gray08: "#ECECEC",
  gray03: "#F8F8F8",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.greenLight,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
