const path = require('path');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin')
//const buildPath = path.resolve(__dirname, 'dist');

module.exports = {

    // This option controls if and how source maps are generated.
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        index: './src/index.js',
    },

    // how to write the compiled files to disk
    // https://webpack.js.org/concepts/output/
    output: {
        filename: '[index].js',
        sourceMapFilename: "[index].bundle.map",
        libraryTarget: 'var',
        library: 'Entrypoint'
    },

    // https://webpack.js.org/concepts/loaders/
    module: {
        
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            // Prod code
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader"
            //     ]
            // },
            {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  'css-loader'
                  // Please note we are not running postcss here
                ]
            },
            {
            // Load all images as base64 encoding if they are smaller than 8192 bytes
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                loader: 'url-loader',
                options: {
                    // On development we want to see where the file is coming from, hence we preserve the [path]
                    name: '[path][name].[ext]?hash=[hash:20]',
                    esModule: false,
                    limit: 8192
                }
                }
            ]
            }
        ]
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        //new CleanWebpackPlugin(buildPath),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        
        // Prod code
        // new MiniCssExtractPlugin({
        //     filename: "[name].[contenthash].css",
        //     chunkFilename: "[id].[contenthash].css"
        // })
    ],

    // https://webpack.js.org/configuration/optimization/(Prod code)
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true
    //         }),
    //         new OptimizeCssAssetsPlugin({})
    //     ]
    // }
};