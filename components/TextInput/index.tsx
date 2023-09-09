import React, { ComponentProps } from "react";
import { Controller } from "react-hook-form";
import {
  View,
  TextInput as TextInputRN,
  TextInputProps as TextInputPropsRN,
  ViewStyle,
} from "react-native";

import Box from "../Box";
import Text from "../Text";

export interface TextInputProps extends TextInputPropsRN {
  label: string;
  helpText?: string;
  error?: string;
  containerStyle?: ViewStyle;
  boxProps?: ComponentProps<typeof Box>;
}

export default function TextInput({
  label,
  error,
  helpText,
  containerStyle,
  boxProps,
  ...textInputProps
}: TextInputProps) {
  return (
    <Box {...boxProps}>
      <Text>{label}</Text>
      <TextInputRN {...textInputProps} />
      {error && (
        <Text variant="bodyS" color="error">
          {error}
        </Text>
      )}
      {helpText && <Text variant="bodyS">{helpText}</Text>}
    </Box>
  );
}

export interface FormTextInputProps extends TextInputProps {
  name: string;
  control: ComponentProps<typeof Controller>["control"];
  rules?: ComponentProps<typeof Controller>["rules"];
}

export function FormTextInput({
  name,
  control,
  rules,
  ...textProps
}: FormTextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextInput
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          error={error?.message}
          {...textProps}
        />
      )}
    />
  );
}
