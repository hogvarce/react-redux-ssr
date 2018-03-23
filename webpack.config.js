const webpack = require("webpack");
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const commonConfig = {
  output: {
      path: __dirname,
  },
  module: {
      rules: [
          {
              test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: "file-loader",
              options: {
                  name: "public/media/[name].[ext]",
                  publicPath: url => url.replace(/public/, "/static"),
              }
          },
          {
              test: /js$/,
              exclude: /(node_modules)/,
              loader: "babel-loader"
          }
      ]
  }
};

const browserConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "public/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            {
              loader: "postcss-loader",
              options: { plugins: [autoprefixer()] }
            }
          ]
        })
      },

    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/css/[name].css"
    })
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      }
    ]
  }
};

module.exports = [merge(commonConfig, browserConfig), merge(commonConfig, serverConfig)];
