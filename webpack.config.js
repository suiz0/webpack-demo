// Cargamos el plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Cargamos el plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    plugins: [ // Lo registramos
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo'
        })
    ]
}