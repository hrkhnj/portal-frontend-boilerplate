const Routes = require('next-routes')
const routes = new Routes()

routes
.add('index', '/')
.add('article', '/article/:id', 'article')

// TODO
// export default routes
module.exports = routes;
