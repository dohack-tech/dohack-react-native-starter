import React from "react";
import { Button } from "react-native"

export const MyButton = ({ onPress, text }) => {
  return <Button title={text} onPress={onPress} />;
};
