let CircularDependencyPlugin = require('circular-dependency-plugin');
let path = require('path');
let fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    context: __dirname,
    entry: './server/Server.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
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
                    configFileName: path.resolve(__dirname, './server/tsconfig.json')
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    target: 'node',
    resolve: {
        modules: [
            path.resolve('./server'),
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
    ],
    externals: nodeModules
}