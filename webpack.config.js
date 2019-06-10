const path = require('path');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        host: 'localhost',
        port: 3000,
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3001,
            proxy: 'http://localhost:3000'
        }, {
            reload: false
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        new ExtractTextPlugin({
            filename: 'app.css'
        }),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),

        new PurifyCSSPlugin({
            paths: glob.sync([
                path.resolve(__dirname, 'index.js'),
                path.resolve(__dirname, 'src/**/*.js'),
            ]),
            purifyOptions: {
                rejected: true
            }
        }),
    ]
}
