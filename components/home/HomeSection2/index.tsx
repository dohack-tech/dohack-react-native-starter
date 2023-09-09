import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "react-native";

import Box from "../../Box";
import Card from "../../Card";
import Carousel from "../../Carousel";
import Text from "../../Text";
import theme from "../../theme";

export default function HomeSection2() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  return (
    <Box marginVertical="m">
      <Text variant="h2" marginBottom="s">
        {t("Sección 2")}
      </Text>
      <Box style={{ marginRight: -theme.spacing.l }}>
        <Carousel
          width={width * 0.85}
          style={{ width: "100%" }}
          height={120}
          data={[
            t("Item 1"),
            t("Item 2"),
            t("Item 3"),
            t("Item 4"),
            t("Item 5"),
          ]}
          renderItem={({ item }) => (
            <Card
              padding="m"
              flex={1}
              flexDirection="row"
              alignItems="center"
              style={{ marginLeft: "2.5%" }}
            >
              <Text>{item}</Text>
            </Card>
          )}
        />
      </Box>
    </Box>
  );
}
