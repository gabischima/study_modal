const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = () => merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
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
