<<<<<<< HEAD
const {resolve} = require('path')
const fs = require('fs')
let webpackpath=resolve(__dirname, "node_modules/webpack");
let jsPaths=[];
//遍历文件
function searchForFiles(nowPath,end){
    let files=fs.readdirSync(nowPath)
    let len=files.length;
    for(let i=0;i<len;i++){
        let filePath=resolve(nowPath,files[i])
        let stat=fs.statSync(filePath)
        if(stat.isDirectory()){
            searchForFiles(filePath,0)
        }else if(/.js$/ig.test(filePath)){
            jsPaths.push({
                fileName:files[i],
                filePath:filePath
            })
        }
    }
}
searchForFiles(webpackpath,1);

//遍历文件们，找出每个文件中依赖的内容
/**
 *  SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 * 
 */

function search(array,obj,str){
    try{
    for(let i=0;i<jsPaths.length;i++){
        let a=fs.readFileSync(jsPaths[i].filePath,'utf8')
        array.forEach((test)=>{
            if(eval("/"+str+test+"/g").test(a)){
                obj[test].push({
                    fileName : jsPaths[i].filePath,
                    count : a.match(eval("/"+str+test+"/g")).length
                })
            }
        })
    }}catch(e){}
}
// search(test_array,test_obj,"new ");
// console.log(JSON.stringify(test_obj));
// test_array.forEach((str)=>{
//     let count=test_obj[str].reduce((p,c)=>{
//         return p+c.count
//     },0)
//     console.log(str,count)
// })
let test_array=["JavascriptModulesPlugin"]
//let test_array=["SyncHook","SyncBailHook","SyncWaterfallHook","SyncLoopHook","AsyncParallelHook","AsyncParallelBailHook","AsyncSeriesHook","AsyncSeriesBailHook","AsyncSeriesWaterfallHook"];
let test_obj={}
test_array.forEach((str)=>{
    test_obj[str]=[]
})
let serachstr="";
search(test_array,test_obj,serachstr);
console.log(JSON.stringify(test_obj));
=======
let {resolve}=require("path")
console.log(resolve(__dirname,"node_modules","webpack-cli","bin","cli.js"))
let webpath=resolve(__dirname,"node_modules","webpack-cli","bin","cli.js")
require(webpath)
>>>>>>> 3a99ea6fc523f6ec16b13a5e0dce0935dc940311
