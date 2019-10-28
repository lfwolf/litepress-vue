'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//192.168.3.5:8081/api/wx/"',
  API_ROOT_WP: '"//www.akucun.xyz/wp-json/wp/v2"',
  API_ROOT_LIZHI: '"https://m.lizhi.fm/api/user/audios/"'
})
