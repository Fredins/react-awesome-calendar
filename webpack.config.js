const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "app", "index.js"),
    output: { 
        path: path.join(__dirname, "build"), 
        filename: "index.js",
        libraryTarget: 'commonjs2'
    },
    resolve: { 
      modules: [path.resolve(__dirname), "node_modules"] ,
      extensions: [".js", ".jsx"],
      symlinks: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot|png|jpg|gif|svg|base64|mp4)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000,
                        },
                    },
                ],
            },
            {
                test: /\.scss|css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
};
