// TODO
// import Routes from 'next-routes'
const Routes = require('next-routes')
const routes = new Routes()

routes
.add('index', '/')
.add('article', '/article/:id')

// TODO
// export default routes
module.exports = routes;
