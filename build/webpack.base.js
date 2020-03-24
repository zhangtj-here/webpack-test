const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all' //默认值: async
    //     }
    // },
    // 修改为多入口
    entry: './src/other.js',
    /*entry: { //'./src/index.js',
        index: "./src/index.js",
        other: "./src/other.js"
    },*/
    output: {
        path: path.resolve("./dist"),
        // filename: 'main.js'
        // 多入口无法对应为一个出口，所以用[name]自动匹配入口名，并自动打包多个js
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        // 如果使用了html插件，就得手动使用多入口对应的html文件
        // 默认会加载所有的js,chunks可以手动指定加载哪些js
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            // chunks: ['index','other']
        }),
        // new htmlWebpackPlugin({
        //     filename: 'other.html',
        //     template: './src/other.html',
        //     // chunks: ['other']
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
         {
           from: path.resolve('assets'),
           to: 'assets'
         }
        ]),
        new Webpack.BannerPlugin('这是练习webpack的代码'),
        new Webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            // placeholders
            filename: '[name]-[hash:6].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                // loader: ['style-loader', 'css-loader', 'less-loader']
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                // loader: ['style-loader', 'css-loader', 'sass-loader']
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
            },
            {
               test: /\.(htm|html)$/i,
               loader: 'html-withimg-loader'
            },
            // {
            //     test: /\.(jpg|png|bmp|jpeg|gif)/,
            //     loader: 'file-loader'
            // }
            /*{
                // 用于解析jquery模块的绝对路径
                test: require.resolve('jquery'),
                use: {
                    loader: 'expose-loader',
                    options: '$'
                }
            }*/
        ]
    }
    

}