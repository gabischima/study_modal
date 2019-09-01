const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => merge(base, {
	mode: 'production',
	output: {
		filename: 'gsm-modal.min.js'
	},
	optimization: {
    minimizer: [new TerserPlugin()]
  },
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
			API_URL: 'url',
			DEBUG: false
		})
	]
})
