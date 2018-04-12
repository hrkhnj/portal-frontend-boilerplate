const next = require('next')
const routes = require('./src/routes')
const app = next({
  dir: './src',
  dev: process.env.NODE_ENV !== 'production'
})
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')

app.prepare().then(() => {
  createServer(handler).listen(3000)
})
