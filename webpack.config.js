"use strict";
const path = require('path');
const webpack = require('webpack');
const generateExternals = require('webpack-generate-umd-externals');

const { externals, NamedAMDModulesPlugin } = generateExternals({
    'matreshka/select': 'Matreshka.select',
    'matreshka/bindnode': 'Matreshka.bindNode',
});

module.exports = {
	devtool: 'source-map',
	entry: './src',
	externals,
	output: {
		path: `${__dirname}/bundle`,
		filename: 'matreshka-parse-form.min.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	},

	plugins: [
		new NamedAMDModulesPlugin(),
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
	]
};
