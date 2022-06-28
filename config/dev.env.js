'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//测试环境
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"/"',//测试环境 localhost,本地直接留空
})
