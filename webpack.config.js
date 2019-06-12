const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  entry: { main: './app/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader: "babel-loader"}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.scss$/,
        use: {
          loader: 'sass-loader',
          options: {sourceMap: true,}
        }
      },
    ]
  },
  devServer: {
    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    open: true,

    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },

    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title : 'Webpack Work',
      template: './public/index.html'
    }),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
  ]
}