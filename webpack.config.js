const path=require("path")
const webpack=require("webpack")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin=require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
module.exports = {
    mode:"none",
    //mode:"production",
    
    entry:{
        index:path.join(__dirname,"/src/index.js"),
        page1:path.join(__dirname,"/src/page1.js"),
        page2:path.join(__dirname,"/src/page2.js"),
        client:['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true','webpack/hot/dev-server']
    },
    output:{
        publicPath:"/"
    },
    //devtool: 'source-map',
    optimization:{
        flagIncludedChunks:true,
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        //new webpack.optimize.ModuleConcatenationPlugin(),//???
        new webpack.NoEmitOnErrorsPlugin(),
        //new UglifyJsPlugin(),
        //new webpack.FlagDependencyUsagePlugin(), 
        //new webpack.optimize.OccurrenceOrderPlugin(), //https://webpack.js.org/plugins/internal-plugins/#occurenceorderplugin
        new webpack.optimize.SideEffectsFlagPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath:"/",
    },
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