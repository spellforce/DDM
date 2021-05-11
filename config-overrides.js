const {
  override,
  addLessLoader,
  fixBabelImports,
  // useEslintRc,
  addWebpackPlugin,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");
// const envs = require("./env");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const chalk = require('chalk');

const resolve = dir => path.join(__dirname, ".", dir);
const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};
// const webpack = require("webpack");

module.exports = override(
  addLessLoader({
    importedLoaders: 1,
    javascriptEnabled: true,
    modifyVars: { 
      "@primary-color": "#ED8A11",
      "@font-size-base": "12px",
      "@border-radius-base": "2px",
    }
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // useEslintRc(".eslintrc"),
  // close source map
  rewiredMap(),
  addWebpackAlias({
    ["@"]: resolve("src"),
    '@components': path.resolve(__dirname, 'src/components'),
  }),
  // addWebpackPlugin(
  //   new webpack.DefinePlugin(envs.get(process.argv[2].split("=")[1]))
  // ),
  // yarn build progress
  addWebpackPlugin(new ProgressBarPlugin({
    complete: "█",
    format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
    clear: true
  })),
  // addWebpackPlugin(new CompressionWebpackPlugin({
  //   test: /\.js$|\.css$/,
  //   threshold: 1024,
  // }))
);
