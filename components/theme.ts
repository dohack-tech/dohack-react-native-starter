import { createTheme } from "@shopify/restyle";

const palette = {
  greenPrimary: "#91EE75",
  purplePrimary: "#7A73FF",
  redPrimary: "#FE5E5E",

  gray80: "#414141",
  gray60: "#717171",
  gray40: "#929292",
  gray20: "#D0D0D0",
  gray08: "#ECECEC",

  black: "#0B0B0B",
  white: "#FFFFFF",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.greenPrimary,
    lightBorder: palette.gray20,
    iconButtonPrimaryBackground: palette.gray08,
    iconButtonActionBackground: palette.white,
    error: palette.redPrimary,
    icon: palette.black,
    iconInactive: palette.gray20,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    h1: {
      fontFamily: "RedHatDisplay_500Medium",
      fontWeight: "500",
      fontSize: 20,
      lineHeight: 26,
    },
    h2: {
      fontFamily: "RedHatDisplay_500Medium",
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 26,
    },
    h3: {
      fontFamily: "RedHatDisplay_600SemiBold",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 18,
    },
    body: {
      fontFamily: "RedHatDisplay_400Regular",
      fontSize: 16,
      lineHeight: 24,
    },
    bodyS: {
      fontFamily: "RedHatDisplay_400Regular",
      fontSize: 12,
      lineHeight: 16,
    },
    defaults: {
      fontFamily: "RedHatDisplay_400Regular",
    },
  },
  cardVariants: {
    defaults: {
      backgroundColor: "cardPrimaryBackground",
      borderRadius: 18,
      padding: "m",
    },
    xs: {
      backgroundColor: "cardPrimaryBackground",
      borderRadius: 5,
      padding: "xs",
    },
  },
  iconButtonVariants: {
    defaults: {
      backgroundColor: "iconButtonPrimaryBackground",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      width: 40,
      height: 40,
    },
    action: {
      backgroundColor: "iconButtonActionBackground",
      borderColor: "lightBorder",
      borderWidth: 2,
      borderRadius: 56,
      width: 56,
      height: 56,
    },
  },
});

export type Theme = typeof theme;
export default theme;
