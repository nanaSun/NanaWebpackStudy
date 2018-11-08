const path=require("path")
<<<<<<< HEAD
const webpack=require("webpack")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin=require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.make.intercept({
        // register: (tapInfo) => {
        //     console.log(`${tapInfo.name} is doing it's job`);
        // },
        // tap: (tapInfo) => {
        //     console.log("make tap",tapInfo.name)
        // }
    })
  }
}
module.exports = {
=======
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(MiniCssExtractPlugin.loader)
//__dirname;
module.exports={
>>>>>>> 3a99ea6fc523f6ec16b13a5e0dce0935dc940311
    mode:"none",
    entry:{
<<<<<<< HEAD
        index:path.join(__dirname,"/src/index.js"),
        // //index:path.join(__dirname,"/src/index.js"),
        page1:path.join(__dirname,"/src/page1.js")
        // page2:path.join(__dirname,"/src/page2.js")
        // //client:[,'webpack/hot/dev-server']
=======
        "index":path.resolve(__dirname,"src/scripts/index/index.js"),
        "list":path.resolve(__dirname,"src/scripts/list/list.js"),
>>>>>>> 3a99ea6fc523f6ec16b13a5e0dce0935dc940311
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"scripts/[name].js"
    },
<<<<<<< HEAD
    //devtool: 'source-map',
    // optimization:{
    //     flagIncludedChunks:true,
    //     minimize: true,
    // },
    plugins: [
        //new webpack.NamedModulesPlugin(),
        // new webpack.NamedChunksPlugin((chunk) => {
        //     return chunk.mapModules(m => {
        //         return path.relative(m.context, m.request)
        //     }).join("_")
        // }),
        new ConsoleLogOnBuildWebpackPlugin(),
        //new HtmlWebpackPlugin(),
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        // //new webpack.optimize.ModuleConcatenationPlugin(),//???
        // new webpack.NoEmitOnErrorsPlugin(),
        // //new UglifyJsPlugin(),
        // //new webpack.FlagDependencyUsagePlugin(), 
        // //new webpack.optimize.OccurrenceOrderPlugin(), //https://webpack.js.org/plugins/internal-plugins/#occurenceorderplugin
        // new webpack.optimize.SideEffectsFlagPlugin(),
        //new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     publicPath:"/",
    //     hot:true
    // },
    module: {
        rules: [
            // {
            //   test: /\.css$/,
            //   use: [
            //     { loader: 'css-loader',options: {modules: false}}
            //   ]
            // }
            {
              test: /\.css$/,
              use: [
                { loader: 'css-loader'}
              ]
            },
            {
                test: /\.txt$/,
                use: {
                  loader: path.resolve(__dirname, 'test-loader/test-loader.js'),
                  options: {
                    name: 'Alice'
                  }
                }
            }
          ]
    }
};
=======
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
>>>>>>> 3a99ea6fc523f6ec16b13a5e0dce0935dc940311
