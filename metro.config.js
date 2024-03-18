// // Learn more https://docs.expo.io/guides/customizing-metro
// import { getDefaultConfig } from "expo/metro-config";

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // [Web-only]: Enables CSS support in Metro.
//   isCSSEnabled: true,
// });

// export default config;





// // https://github.com/expo/expo/issues/23322
// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require("expo/metro-config");

// const config = getDefaultConfig(__dirname);

// // Remove all console logs in production...
// config.transformer.minifierConfig.compress.drop_console = true;
// config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs", "cjs"];
// module.exports = config;




const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Additional features...
});

config.transformer.minifierConfig.compress.drop_console = true;
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs", "cjs"];
module.exports = config;