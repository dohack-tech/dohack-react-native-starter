import React from "react";
import { View } from "react-native";

import Box from "./index";

const args: React.ComponentProps<typeof Box> = {
  width: 100,
  height: 100,
  borderRadius: 5,
  backgroundColor: "cardPrimaryBackground",
};

const BoxMeta = {
  title: "Box",
  component: Box,
  args,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default BoxMeta;

export const Basic = {};
