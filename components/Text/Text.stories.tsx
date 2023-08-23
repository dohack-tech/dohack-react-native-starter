import React from "react";
import { View } from "react-native";

import Text from "./index";

const TextMeta = {
  title: "Text",
  component: Text,
  args: {
    children: "This is a text",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Basic = {};
