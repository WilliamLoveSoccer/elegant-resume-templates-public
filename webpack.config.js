const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        templates: path.resolve(__dirname, './src/index.js'),
        config: path.resolve(__dirname, './src/lib/config/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './lib'),
        filename: '[name].js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true,
    },
};
