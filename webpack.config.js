const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve("./dist"),
        filename: 'main.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve('./dev'),
        open: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|jpeg|bmp|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 3 * 1024,
                        outputPath: 'images',
                        name: '[name]-[hash:6].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.js/,
                use: {
                   loader: "babel-loader",
                   /* options: {
                     presets: ["@babel/env"],
                     plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ] 
                   } */
                },
                exclude: /node_modules/
            }
            // {
            //     test: /\.(jpg|png|bmp|jpeg|gif)/,
            //     loader: 'file-loader'
            // }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
    

}