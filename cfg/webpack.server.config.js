const path = require('path')
const webpackExternals = require('webpack-node-externals')

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
    ],
  },
  externals: [webpackExternals()],
  optimization: {
    minimize: false,
  },
}
