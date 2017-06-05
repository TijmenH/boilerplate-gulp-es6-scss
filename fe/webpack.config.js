module.exports = {
		entry: './src/js/app.js',
		output: {
			path: __dirname + "/../html/assets/",
			filename: 'app.bundle.js'
		},
		module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
