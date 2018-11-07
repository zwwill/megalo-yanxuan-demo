'use strict'
const glob = require('glob')
const { resolve } = require('./util')

// 获取指定目录下符合glob的所有文件
function getEntry(globPath) {
    var files = glob.sync(globPath);
    var entries = {},
        pageName;

    files.forEach((entry) => {
        pageName = entry.match(/\/(pages\/[^\/.]*\/index)\.js$/)[1];
        entries[pageName] = entry;
    })
    return entries;
}

module.exports = (()=> {
    let entry = {}
    entry = getEntry(resolve('src/pages/*/index.js'));
    return entry
})()
