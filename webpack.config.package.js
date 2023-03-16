const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        templates: path.resolve(__dirname, './src/lib/index.js'),
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
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '',
        globalObject: 'this',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        },
    },
};
