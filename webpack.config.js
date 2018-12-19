module.exports = {
	entry: [

		'babel-polyfill',
		'./src/js/app.js'
	],
	output: {
		path: __dirname+"/dist",
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/, 
				loader: "style-loader!css-loader"
			},
			{
				test: /\.js$/, 
				loader: "babel-loader", 
				exclude : /node_modules/, 
				query: {
					presets: ['env', 'stage-0']
				}
			}
		]
	}
}