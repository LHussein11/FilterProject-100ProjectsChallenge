const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: mode,

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    }, 
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will reference .babelrc
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: 'source-map',

    devServer: {contentBase: './dist'},
}