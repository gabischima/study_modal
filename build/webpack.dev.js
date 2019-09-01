const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = () => merge(base, {
  mode: 'development',
  output: {
    filename: 'gsm-modal.js'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_URL: 'url',
      DEBUG: true
    })
  ]
})
