let CircularDependencyPlugin = require('circular-dependency-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/example/Example.ts',
    output: {
        filename: './build/example.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    devtool: "source-map",
    module: {
        loaders: [
            // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true
        }),
        new CopyWebpackPlugin([
            {
                from: './src/example/asset',
                to: './build/asset'
            }
        ])
    ]
}