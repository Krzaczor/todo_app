const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.js'
    },
    mode: "development",
    devtool: "inline-source-map",

    devServer: {
        host: "localhost",
        port: 3000,
        overlay: true
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3001,
            proxy: "http://localhost:3000"
        }, {
            reload: false
        }),

        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}