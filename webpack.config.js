'use strict';

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
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-async-to-generator']
                }
            }
        ]
    },
    devtool: '#source-map'
};