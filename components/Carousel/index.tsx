import React, { ComponentProps } from "react";
import { View } from "react-native";
import RNRCarousel from "react-native-reanimated-carousel";

type CarouselProps<T> = ComponentProps<typeof RNRCarousel<T>>;

function Carousel<T>(props: CarouselProps<T>) {
  return (
    <View style={{ flex: 1 }}>
      <RNRCarousel<T> {...props} />
    </View>
  );
}

export default Carousel;
