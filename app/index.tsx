import Constants from "expo-constants";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>DoHack React Native Starter</Text>
        <StatusBar style="auto" />
      </View>
      {Constants.expoConfig.extra.storybookEnabled === "true" && (
        <Link href="/storybook" asChild>
          <Text
            style={{
              position: "absolute",
              padding: 10,
              fontSize: 20,
              bottom: 10,
              right: 10,
              backgroundColor: "#0004",
            }}
          >
            SB
          </Text>
        </Link>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
