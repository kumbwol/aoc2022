const path = require('path');

module.exports = {
	entry: './project/src/main.ts',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './project/build'),
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			}
		]
	},
	devtool: 'source-map'
};
