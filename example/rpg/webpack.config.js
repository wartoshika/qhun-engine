let CircularDependencyPlugin = require('circular-dependency-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let path = require('path');

let exampleName = 'rpg';
let exampleDist = path.resolve(__dirname, "../../dist/example");

module.exports = {
    context: __dirname,
    entry: './MyAwesomeRpgGame.ts',
    output: {
        filename: './dist/example/' + exampleName + '/example.js'
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
                    configFileName: path.resolve(__dirname, './tsconfig.json')
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
            'node_modules'
        ],
        extensions: ['.js', '.ts'],
        alias: {
            "@qhun-engine/client": path.resolve(__dirname, "../../src/client"),
            "@qhun-engine/server": path.resolve(__dirname, "../../src/server"),
            "@qhun-engine/shared": path.resolve(__dirname, "../../src/shared")
        }
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true
        }),
        new CleanWebpackPlugin([
            `${exampleDist}/${exampleName}`
        ]),
        new CopyWebpackPlugin([
            {
                from: "asset",
                to: `${exampleDist}/${exampleName}/asset`
            }
        ])
    ]
}