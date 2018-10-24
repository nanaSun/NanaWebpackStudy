let {resolve}=require("path")
console.log(resolve(__dirname,"node_modules","webpack-cli","bin","cli.js"))
let webpath=resolve(__dirname,"node_modules","webpack-cli","bin","cli.js")
require(webpath)