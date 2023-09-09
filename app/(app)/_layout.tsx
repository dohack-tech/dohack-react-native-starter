import { Redirect, Stack } from "expo-router";

import { useAuth } from "../../context/auth";

export default function AppLayout() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
