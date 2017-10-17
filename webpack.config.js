const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./app/index.js'],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'static' },
        ]),
        new ExtractTextPlugin('[name].css'),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader',
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { cacheDirectory: true },
                }
            }
        ]
    }
}
