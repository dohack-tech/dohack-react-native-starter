import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
} from "@expo-google-fonts/red-hat-display";
import { ThemeProvider } from "@shopify/restyle";
import { loadAsync } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useRef, useState } from "react";
import "intl-pluralrules";
import { View } from "react-native";

import "../config/i18n";
import theme from "../components/theme";
import { AuthProvider, loadUser } from "../context/auth";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const userRef = useRef(null);
  if (userRef.current === null) {
    userRef.current = loadUser();
  }

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.allSettled([
          loadAsync({
            RedHatDisplay_400Regular,
            RedHatDisplay_500Medium,
            RedHatDisplay_600SemiBold,
            RedHatDisplay_700Bold,
          }),
          userRef.current,
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <AuthProvider userPromise={userRef.current}>
      <ThemeProvider theme={theme}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Slot />
        </View>
      </ThemeProvider>
    </AuthProvider>
  );
}
