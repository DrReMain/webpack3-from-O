const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};