const path = require('path');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = (env) => {
    
    const isProduction = function(yes, no) {
        return env.mode === 'production' ? yes : no;
    }

    return {
        entry: ['./index.js', './index.scss'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js'
        },
        mode: isProduction('production', 'development'),
        devtool: isProduction('source-map', 'cheap-eval-source-map'),
    
        devServer: {
            host: 'localhost',
            compress: true,
            port: 3000,
            overlay: true,
            historyApiFallback: true,
            open: 'http://localhost:3000'
        },
    
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        fix: isProduction(true, false)
                    }
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            'sass-loader'
                        ]
                    })
                }
            ]
        },
    
        plugins: [
            new CleanWebpackPlugin(),
    
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
}
