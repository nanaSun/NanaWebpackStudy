const {getOptions} =require('loader-utils');


module.exports = function(content, map) {
    const options = getOptions(this);
    content = content.replace(/\[name\]/g, options.name);
    return `export default ${ JSON.stringify(content) }`;
}