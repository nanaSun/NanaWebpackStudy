const {resolve} = require('path');
const fs = require('fs');
let webpack=require('webpack/lib/webpack');
let config=require("./webpack.config.js");
let compile=webpack(config);
compile.run();
