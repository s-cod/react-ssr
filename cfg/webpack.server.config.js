const path = require('path')
const webpackExternals = require('webpack-node-externals')
const GLOBAL_CSS_REGEXP = /\.global\.css$/
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  externals: [webpackExternals()],
  optimization: {
    minimize: false,
  },
}
