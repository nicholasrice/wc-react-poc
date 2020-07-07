const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, { mode }) {
  const production = mode === 'production';
  return {
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-maps' : 'inline-source-map',
    entry: {
      app: ['./src/index.tsx']
    },
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['src', 'node_modules']
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
      writeToDisk: true,
      open: !process.env.CI,
      lazy: false
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          use: [
            {
              loader: 'ts-loader'
            }
          ],
          exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
      ]
    }
  }
}