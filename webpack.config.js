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

    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
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