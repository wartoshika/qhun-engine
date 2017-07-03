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
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    devtool: "source-map",
    module: {
        rules: [
            // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './tsconfig.server.json')
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
        extensions: ['.js', '.ts']
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