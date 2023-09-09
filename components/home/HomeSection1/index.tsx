import { useTranslation } from "react-i18next";

import Box from "../../Box";
import Text from "../../Text";

export default function HomeSection1() {
  const { t } = useTranslation();

  return (
    <Box marginVertical="m" paddingBottom="l">
      <Text variant="h2">{t("Sección 1")}</Text>
    </Box>
  );
}
