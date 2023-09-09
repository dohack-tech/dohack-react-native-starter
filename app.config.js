const _merge = require("lodash/merge");
require("dotenv").config();

const APP_VARIANTS_CONFIG = {
  DEV: {
    appNameSuffix: " (dev)",
    androidPackageSuffix: ".dev",
    iOSBundleIdentifierSuffix: ".dev",
  },
  QA: {
    appNameSuffix: " (qa)",
    androidPackageSuffix: ".qa",
    iOSBundleIdentifierSuffix: ".qa",
  },
};

module.exports = ({ config }) => {
  const variantConfig =
    process.env.MY_ENVIRONMENT === "dev"
      ? APP_VARIANTS_CONFIG.DEV
      : APP_VARIANTS_CONFIG[process.env.APP_VARIANT];

  let newConfig = _merge(config, {
    extra: {
      env:
        process.env.MY_ENVIRONMENT === "dev" ? "DEV" : process.env.APP_VARIANT,
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  });

  if (variantConfig) {
    newConfig = _merge(newConfig, {
      name: `${newConfig.name}${variantConfig.appNameSuffix}`,
      android: {
        package: `${newConfig.android.package}${variantConfig.androidPackageSuffix}`,
      },
      ios: {
        bundleIdentifier: `${newConfig.ios.bundleIdentifier}${variantConfig.iOSBundleIdentifierSuffix}`,
      },
    });
  }

  if (process.env.PROJECT_ID) {
    newConfig = _merge(newConfig, {
      extra: {
        eas: {
          projectId: process.env.PROJECT_ID,
        },
      },
    });
  }

  return newConfig;
};
