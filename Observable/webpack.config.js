const path = require("path");
// pulled in sass-loaders via https://github.com/webpack-contrib/sass-loader
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./src/pages/index.ts"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.ts?$/, loader: "ts-loader" },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        { loader: "postcss-loader" },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
                    
            },



            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        { loader: "postcss-loader" },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
                    
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    devtool: "source-map"
}