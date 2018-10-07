const path=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
module.exports = {
    mode:"development",
    plugins: [
        new HtmlWebpackPlugin(), // Generates default index.html
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'Custom template using Handlebars',
            filename: 'test.html',
            template: path.join(__dirname,'src/test.html')
        })
    ],
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader/url'},
                { loader: "file-loader" }
                //{ loader: 'css-loader',options: {modules: false}}
              ]
            }
          ]
    }
};