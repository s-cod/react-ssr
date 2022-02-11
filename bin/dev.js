const webpack = require('webpack')
const nodemon = require('nodemon')
const path = require('path')
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')

const hmrServer = express()
const clientCompiler = webpack(webpackClientConfig)

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    // noInfo: true,
    // watchOption: {
    //   ignore: /dist/,
    // },
    writeToDisk: true,
    stats: 'errors-only',
  })
)

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
  })
)

hmrServer.listen(3001, () => console.log('HMR SERVER successfuly started'))

const compiler = webpack(webpackServerConfig)

compiler.run((error) => {
  if (error) {
    console.log('Compilation failed: ', error)
  }

  compiler.watch({}, (error) => {
    if (error) {
      console.log('Compilation failed: ', error)
    }
    console.log('Compilation was successfully')
  })
  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  })
})
