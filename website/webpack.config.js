// @noflow

const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'src');
const constants = {
	production: JSON.stringify(false)
};

const miniCssPlugin = new MiniCssExtractPlugin({
	filename: '[name].[hash].css',
	chunkFilename: '[id].[hash].css'
});

const errorPlugin = new FriendlyErrorsWebpackPlugin();

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const definePlugin = new webpack.DefinePlugin(constants);

module.exports = (env, argv) => ({
	optimization: {
		nodeEnv: argv.mode
	},
	plugins: [htmlPlugin, miniCssPlugin, errorPlugin, definePlugin],
	resolve: {
		alias: {
			components: path.join(SRC_DIR, 'components'),
			js: path.join(SRC_DIR, 'js'),
			scss: path.join(SRC_DIR, 'scss/')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[local]'
						}
					},
					'sass-loader'
				]
			}
		]
	}
});
