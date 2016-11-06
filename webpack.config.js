'use strict';

const webpack = require('webpack');

const myPackage = require('./package');
const banner = `${myPackage.name} ${myPackage.version} - ${myPackage.description}\nCopyright (c) ${ new Date().getFullYear() } ${myPackage.author} - ${myPackage.homepage}\nLicense: ${myPackage.license}`;


module.exports = {
    entry: {
        shanbay: './src/index.js'
    },
    output: {
        path: './dist/',
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.BannerPlugin(banner)
    ]
};