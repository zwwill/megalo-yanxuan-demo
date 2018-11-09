'use strict'
const fs = require('fs')
const path = require( 'path' )
const { walk4Obj } = require('./util')
const exp4parse = /\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\/|\/\/[^\r\n]*|\s/g

// 获取指定目录下符合glob的所有文件
function getEntry(file) {
    let entries = {},
        txt = '',
        mainObj = {},
        pages,
        subpackages

    try {
        txt = fs.readFileSync(file,'utf8')
        txt = txt.replace(exp4parse,'')
        mainObj = walk4Obj(txt,'exportdefault')['config'] || {}

        pages = mainObj.pages || []
        subpackages = mainObj.subpackages || []
        
        pages.forEach(p=>{
            entries[p] = path.resolve(`src/${p}.js`)
        })

        subpackages.forEach(sp=>{
            let {root, pages} = sp
            if(root && pages.length>0){
                pages.forEach(p=>{
                    entries[`${root}/${p}`] = path.resolve(`src/${root}/${p}.js`)
                })
            }
        })
        
    } catch (e) {
        console.log(e)
    }

    return entries
}

module.exports = (() => {
    let entry = {}
    entry = getEntry(path.resolve( __dirname, '../src/index.js'))
    return entry
})()