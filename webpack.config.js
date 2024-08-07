const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-gufo-mf",
    projectName: "style-guide-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9005,
    },
    // plugins: [
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       { from: path.resolve(__dirname, "public/locales"), to: "locales" },
    //     ],
    //   }),
    // ],
  });
};
