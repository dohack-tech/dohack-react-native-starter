import {
  BackgroundColorProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  composeRestyleFunctions,
  createVariant,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

import Box from "../Box";
import { Theme } from "../theme";

type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "iconButtonVariants">;

const variant = createVariant<Theme>({
  themeKey: "iconButtonVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  variant,
]);

type IconButtonProps = RestyleProps & {
  icon: ReactNode;
  onPress: PressableProps["onPress"];
  pressableProps?: Omit<PressableProps, "onPress">;
};

function IconButton({
  icon,
  onPress,
  pressableProps,
  ...rest
}: IconButtonProps) {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Pressable onPress={onPress} {...pressableProps}>
      <Box {...props}>{icon}</Box>
    </Pressable>
  );
}

export default IconButton;
