module.exports = {
    entry: "./src/indexScripts/index.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.ts?$/, loader: "ts-loader" }
      ]
    },
    devtool : "source-map"
}