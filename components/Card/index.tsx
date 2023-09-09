import {
  BoxProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../theme";

type Props = BoxProps<Theme> &
  SpacingProps<Theme> &
  VariantProps<Theme, "cardVariants"> & {
    children?: React.ReactNode;
    style?: ViewStyle;
  };
const Card = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "cardVariants" }),
]);

export default Card;
