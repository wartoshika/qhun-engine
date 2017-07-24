let CircularDependencyPlugin = require('circular-dependency-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
    context: __dirname,
    entry: './client/Client.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'client.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './client/tsconfig.json')
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./client'),
            path.resolve('./shared'),
            'node_modules'
        ],
        extensions: ['.js', '.ts'],
        alias: {
            "@shared": path.resolve(__dirname, "./shared")
        }
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true
        })
    ]
}