const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = () => merge(base, {
	mode: 'production',
	output: {
		filename: 'gsm-modal.min.js'
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
			API_URL: 'url',
			DEBUG: false
		}),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i,
			sourceMap: false
		})
	]
})
