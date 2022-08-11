const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Usage of loader functions
    module: {
        rules: [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
            },
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    // the entry point of the webpach to build
    entry : {
        index : path.resolve(__dirname, "src", "index.js")
    },
    //Specify where to store out file after being build
    output : { 
        path : path.resolve(__dirname, "dist") 
    },
    // Plugin for HTML files usage
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    //change server mode to development unless it will be in production mode
    mode : "development",
    optimization: {
        splitChunks: { chunks: "all" }
    },
}