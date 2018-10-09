const path=require("path")
const webpack=require("webpack")
const UglifyJsPlugin=require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
module.exports = {
    //mode:"none",
    mode:"production",
    entry:{
        index:path.join(__dirname,"/src/index.js"),
        page1:path.join(__dirname,"/src/page1.js"),
        page2:path.join(__dirname,"/src/page2.js"),
    },
    // optimization:{
    //     flagIncludedChunks:true,
    //     minimize: true,
    // },
    // plugins: [
    //     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    //     new UglifyJsPlugin(),
    //     new webpack.optimize.ModuleConcatenationPlugin(),//???
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     //new webpack.FlagDependencyUsagePlugin(), 
    //     //new webpack.optimize.OccurrenceOrderPlugin(), //https://webpack.js.org/plugins/internal-plugins/#occurenceorderplugin
    //     new webpack.optimize.SideEffectsFlagPlugin()
    // ],
    // module: {
    //     rules: [
    //         {
    //           test: /\.css$/,
    //           use: [
    //             { loader: 'style-loader/url'},
    //             { loader: "file-loader" }
    //            
    //{ loader: 'css-loader',options: {modules: false}}
    //           ]
    //         }
    //       ]
    // }
};