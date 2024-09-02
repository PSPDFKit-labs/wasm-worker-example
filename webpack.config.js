module.exports = {
	mode: 'development', // Set to "development", "production", or "none"
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		publicPath: 'dist/',
		globalObject: 'typeof self !== "object" ? self : this',
	},
	module: {
		rules: [
			{
				test: /\.worker\.js$/,
				use: {
					loader: 'worker-loader',
					options: {
						filename: '[name].worker.js', // Customize the filename for the worker if needed
						publicPath: 'dist/', // Specify the public path if necessary
						esModule: false, // Set esModule to false for compatibility
					},
				},
			},
			{
				test: /\.wasm$/,
				type: 'javascript/auto', // This disables webpack's default handling of wasm
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'wasm/[name].[hash].[ext]',
							publicPath: '/dist/',
						},
					},
				],
			},
		],
	},
};
