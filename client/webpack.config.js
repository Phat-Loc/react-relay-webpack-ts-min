const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory'],
      },
    ],
  },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.mjs']
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new CopyWebpackPlugin({
            patterns: [{from: './index.html'},],
        }),
        new webpack.DefinePlugin({
            process: {env: {}}
        })

    ],
    stats: {errorDetails: true},
    output: {publicPath: '/', filename: 'index.js', path: path.resolve(__dirname, 'dist')},
};