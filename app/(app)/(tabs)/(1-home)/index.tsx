import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Box from "../../../../components/Box";
import StorybookButton from "../../../../components/StorybookButton";
import Text from "../../../../components/Text";
import HomeSection1 from "../../../../components/home/HomeSection1";
import HomeSection2 from "../../../../components/home/HomeSection2";
import { useAuth } from "../../../../context/auth";

export default function App() {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <StatusBar style="dark" translucent backgroundColor="white" />
      <ScrollView style={styles.container}>
        <Box paddingHorizontal="l" paddingTop="s">
          <Box marginVertical="s">
            <Text variant="h1">{t("Hola", { name: auth.user.name })}</Text>
          </Box>
          <HomeSection1 />
          <HomeSection2 />
          <Pressable onPress={auth.signOut}>
            <Text>{t("Cerrar sesión")}</Text>
          </Pressable>
        </Box>
        <StorybookButton />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
