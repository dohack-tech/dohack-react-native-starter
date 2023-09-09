import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";

import Box from "../components/Box";
import Text from "../components/Text";

export default function SignUp() {
  // TODO: Implement signup
  const { t } = useTranslation();
  return (
    <Box flex={1} paddingHorizontal="l" justifyContent="center">
      <StatusBar style="auto" />
      <Text variant="h1">{t("Registro")}</Text>
      <Box marginVertical="l">
        <Text variant="h3">{t("No disponible")}</Text>
      </Box>
      <Box marginTop="l">
        <Link href="/sign-in">
          <Text>{t("Iniciar sesión")}</Text>
        </Link>
      </Box>
    </Box>
  );
}
