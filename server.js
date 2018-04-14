// [TODO]
// import next from 'next'
// import routes from './src/routes'
// import {createServer} from 'http'
const next = require('next')
const routes = require('./src/routes')
const {createServer} = require('http')

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
})

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(3000)
})
