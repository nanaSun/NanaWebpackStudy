const path=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(MiniCssExtractPlugin.loader)
//__dirname;
module.exports={
    mode:"none",
    entry:{
        "index":path.resolve(__dirname,"src/scripts/index/index.js"),
        "list":path.resolve(__dirname,"src/scripts/list/list.js"),
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"scripts/[name].js"
    },
    //loader
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        useRelativePath:false,
                        outputPath: 'images/',
                        name: '[name].[ext]'
                    }
                  }
                ]
              },
            {
                test: /\.css$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [ {
                loader: 'html-loader',
                options: {
                    root: path.resolve(__dirname),
                    attrs: ['img:src'],
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
                }],
            }
        ]
        ,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'/dist/index.html'),
            template: path.join(__dirname,'/src/templates/index.html'),
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname,'/dist/list.html'),
            template: path.join(__dirname,'/src/templates/list.html'),
            chunks: ["list"]
        }),
        //css打包
        new MiniCssExtractPlugin({
            filename: "styles/[name].css"
        })
    ]
}
