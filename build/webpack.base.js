const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin') 

module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all', //默认值: async,还有其他值all | initial
            minSize: 30000, // 模块最少大于30KB才拆分
            maxSize: 0,  // 模块大小无上限，只要大于30KB都拆分
            minChunks: 1, // 模块最少引用一次才会被拆分
            maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5,超过5的部分不拆分
            maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3,超过3的部分不拆分
            automaticNameDelimiter: '~', // 默认的连接符
            name: true, // 拆分的chunk名,设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接
            cacheGroups: { // 缓存组配置,上面配置读取完成后进行拆分,如果需要把多个模块拆分到一个文件,就需要缓存,所以命名为缓存组
              vendors: { // 自定义缓存组名
                test: /[\\/]node_modules[\\/]/, // 检查node_modules目录,只要模块在该目录下就使用上面配置拆分到这个组
                priority: -10, // 权重-10,决定了哪个组优先匹配,例如node_modules下有个模块要拆分,同时满足vendors和default组,此时就会分到vendors组,因为-10 > -20
                filename: 'vendors.js'
              },
              default: { // 默认缓存组名
                minChunks: 1, // 最少引用两次才会被拆分
                priority: -20, // 权重-20
                // filename: 'defaulf.js',
                reuseExistingChunk: true // 如果主入口中引入了两个模块,其中一个正好也引用了后一个,就会直接复用,无需引用两次
              }
            }
        }
    },
    // 修改为多入口
    entry: {
      main: './src/main.react.js',
    },
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
        new htmlWebpackPlugin({
            filename: 'other.html',
            template: './src/other.html',
            // chunks: ['other']
        }),
        // new CleanWebpackPlugin(),
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
        }),
        new Webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new Webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dist/manifest.json')
        }),
        new addAssetHtmlWebpackPlugin({
            // filepath: path.resolve(__dirname, '../dist/vue_dll.js')
            filepath: path.resolve(__dirname, '../dist/react_dll.js')
        })
    ],
    module: {
        noParse: /jquery|bootstrap/,
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
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
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