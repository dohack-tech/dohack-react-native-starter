import Constants from "expo-constants";
import { Link } from "expo-router";

import Text from "../Text";

export default function StorybookButton() {
  return (
    <>
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
