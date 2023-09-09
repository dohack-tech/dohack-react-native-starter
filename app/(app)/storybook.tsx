import Constants from "expo-constants";
import { Redirect } from "expo-router";

function StorybookRedirect() {
  return <Redirect href="/" />;
}

let AppEntryPoint = StorybookRedirect;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("../../.storybook").default;
}

export default AppEntryPoint;
