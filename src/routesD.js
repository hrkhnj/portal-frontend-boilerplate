// TODO
// import Routes from 'next-routes'
const Routes = require('nextjs-dynamic-routes')
const routes = new Routes()

routes
.add({name: 'index', pattern: '/'})
.add({name: 'article', pattern: '/article/:id'})

// TODO
// export default routes
module.exports = routes;
