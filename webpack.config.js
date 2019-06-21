const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const HOST = process.env.HOST || 'localhost'; // Defaults to `localhost`
const PORT = process.env.PORT || 5000; // Defaults to 8080

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
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    devServer: {
        host: HOST,
        port: PORT,
        open: true,

        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
            '/static': {
                target: `http://${HOST}:${PORT}`,
                pathRewrite: {'^/static' : '/app/static'}
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title : 'Webpack Work',
            template: './public/index.html'
        }),
        new ExtractTextPlugin({
            filename: './public/style.css',
            allChunks: false
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ]
};