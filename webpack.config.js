'use strict';
//NODE_ENV=prod webpack --config webpack.config.js -p сборка в прод
//NODE_ENV=dev webpack сборка в dev
const NODE_ENV = process.env.NODE_ENV || 'dev';
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var version = require("./package.json");
var myversion = JSON.stringify(version);
var ver = JSON.parse(myversion).version;
console.log("Nymphea ver ",JSON.parse(myversion).version);
console.log("Nymphea NODE_ENV ",NODE_ENV);

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {
    entry: {
        nymphea: [
            './src/index.js'
        ]
    }, 
    output: {
        path: __dirname+"/../public",
        filename: '[name].v_'+ver+'.js',
        publicPath:__dirname+'/dist/public/',
        library:"[name]",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader"}
        ]
    },
};
module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.watch = true;
        config.watchOptions = {
            aggregateTimeout:100
        };
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        };
        config.plugins=[
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new webpack.ProvidePlugin({
                $ : "jquery",
                _ : "underscore"
            }),
        ]
    }

    if (argv.mode === 'production') {
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i,
                }),
            ]
        };
        config.plugins=[
            new BundleAnalyzerPlugin()
        ]
    }

    return config;
};