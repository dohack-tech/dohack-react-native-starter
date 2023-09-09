import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

import AlertsIcon from "../../../assets/tab-icons/bell-outline.svg";
import HomeIcon from "../../../assets/tab-icons/home-outline.svg";
import SearchIcon from "../../../assets/tab-icons/magnify.svg";
import Text from "../../../components/Text";
import theme from "../../../components/theme";

const TAB_ICON_PROPS = { width: 32, height: 32 };
const PADDING_BOTTOM = 10;
const PADDING_TOP = 30;

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: PADDING_BOTTOM,
          paddingTop: PADDING_TOP,
          height: TAB_ICON_PROPS.height + PADDING_TOP + PADDING_BOTTOM,
        },
      }}
    >
      <Tabs.Screen
        // TODO: Right now whatever tab is first alphabetically renders first refactor (home) to index maybe
        name="(1-home)"
        options={{
          tabBarAccessibilityLabel: t("Inicio"),
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              {...TAB_ICON_PROPS}
              fill={focused ? theme.colors.icon : theme.colors.iconInactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          tabBarAccessibilityLabel: t("Buscar"),
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              {...TAB_ICON_PROPS}
              fill={focused ? theme.colors.icon : theme.colors.iconInactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(notifications)"
        options={{
          tabBarAccessibilityLabel: t("Alertas"),
          tabBarIcon: ({ focused }) => (
            <AlertsIcon
              {...TAB_ICON_PROPS}
              fill={focused ? theme.colors.icon : theme.colors.iconInactive}
            />
          ),
        }}
      />
    </Tabs>
  );
}
