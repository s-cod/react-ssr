import express from 'express'
import ReactDOM from 'react-dom/server'
import { Header } from '../shared/header'
import { indexTemplate } from './index.Template'

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(Header())))
})

app.listen(3000, () => {
  console.log('Server 1 started on http://localhost:3000')
})
