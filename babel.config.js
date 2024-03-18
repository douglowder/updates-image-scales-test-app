module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-worklets-core/plugin"],
      ["react-native-reanimated/plugin"],
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".ios.jsx", ".android.jsx", ".js", ".jsx", ".json", ".ts", ".tsx"],
          root: ["."],
          alias: {
            "@src": "./src",
            "@api": "./src/api",
            "@assets": "./assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@lib": "./src/lib",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};
