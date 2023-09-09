import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "react-native";
import * as yup from "yup";

import Box from "../components/Box";
import Text from "../components/Text";
import { FormTextInput } from "../components/TextInput";
import { MIN_PASSWORD_LENGTH, useAuth } from "../context/auth";

type FormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { t } = useTranslation();
  const auth = useAuth();
  const router = useRouter();

  const schema = yup
    .object({
      email: yup
        .string()
        .required(t("Campo requerido"))
        .email(t("Debe ser un email válido")),
      password: yup
        .string()
        .required(t("Campo requerido"))
        .min(
          MIN_PASSWORD_LENGTH,
          t("minCharacters", { count: MIN_PASSWORD_LENGTH }),
        ),
    })
    .required("Campo requerido");

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: auth.user?.email || "",
      password: "******",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: Implement login logic
    // const response = await api.post<{ token: string }, { message?: string }>(
    //   "/users/login",
    //   data,
    // );
    // if (response.ok && response.data) {
    //   auth?.signIn({
    //     email: data.email,
    //     token: response.data.token,
    //   });
    // } else {
    //   console.log(t("Hubo un error al inciar sesión."));
    // }
    auth?.signIn({
      name: "apollo",
      email: "apollo@gmail.com",
      token: "token",
    });
    router.replace("/");
  };

  return (
    <Box flex={1} paddingHorizontal="l" justifyContent="center">
      <StatusBar style="auto" />
      <Text variant="h1">{t("Iniciar sesión")}</Text>
      <FormTextInput
        boxProps={{ marginBottom: "s" }}
        label={t("Email")}
        name="email"
        placeholder="ejemplo@mail.com"
        keyboardType="email-address"
        autoComplete="email"
        control={control}
      />
      <FormTextInput
        boxProps={{ marginBottom: "s" }}
        label={t("Contraseña")}
        name="password"
        secureTextEntry
        autoComplete="password"
        control={control}
      />
      <Button title={t("Iniciar sesión")} onPress={handleSubmit(onSubmit)} />
      <Box marginTop="l">
        <Link href="/sign-up">
          <Text>{t("Crear usuario")}</Text>
        </Link>
      </Box>
    </Box>
  );
}
