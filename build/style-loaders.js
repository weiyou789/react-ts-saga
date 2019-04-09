const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config');
const {resolve} = require('./utils');
const sassLoader = {
    loader: 'sass-loader',
    options: {
        includePaths: [resolve('src/styles')]
    }
};


const lessLoader = {
    loader: 'less-loader',
    options: {
        javascriptEnabled: true
    }
};

const typingsForCssModulesLoaderConf = {
    loader: 'typings-for-css-modules-loader',
    options: {
        localIdentName: '[local]',
        modules: true,
        namedExport: true,
        camelCase: true,
        sass: true,
        sourceMap: false
    }
};

module.exports = [
    {
        test: /\.css$/,
        include: [resolve('node_modules')],
        use: [
            config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.less$/,
        include: [resolve('node_modules')],
        use: [
            config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            lessLoader
        ]
    },
    {
        test: /\.scss|.css$/,
        include: [resolve('src')],
        use: [
            config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            typingsForCssModulesLoaderConf,
            sassLoader,
            {loader: 'postcss-loader'}
        ]
    }
];
