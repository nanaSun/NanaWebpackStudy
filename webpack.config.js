const path=require("path")
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
    mode:"none",
    //mode:"production",
    
    entry:{
        index:path.join(__dirname,"/src/index.js"),
        // //index:path.join(__dirname,"/src/index.js"),
        page1:path.join(__dirname,"/src/page1.js")
        // page2:path.join(__dirname,"/src/page2.js")
        // //client:[,'webpack/hot/dev-server']
    },
    output:{
        filename: '[name].js',
        path: __dirname + '/dist'
    },
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