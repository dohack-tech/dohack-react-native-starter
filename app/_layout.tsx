import { ThemeProvider } from "@shopify/restyle";
import { Slot } from "expo-router";

import theme from "../theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Slot />
    </ThemeProvider>
  );
}
