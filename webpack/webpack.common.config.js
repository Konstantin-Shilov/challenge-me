const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const lib = require('./lib');

module.exports.default = {
  entry: './src/index.js',
  output: {
    filename: 'assets/js/[name].bundle.[hash:10].js',
    chunkFilename: 'assets/js/[name].bundle.[chunkhash:10].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    // Удаляем папку с билдом перед новым билдом или запуском
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    // Позволяет передавать в html параметры process.env.VARIABLE
    new webpack.EnvironmentPlugin({
      REACT_APP_TEAM_NAME: 'Team 9.18',
      REACT_APP_PROJECT_NAME: 'ChallengeMe',
    }),
    /* new BundleAnalyzerPlugin(), */
  ],
  resolve: lib.resolve(),
};
