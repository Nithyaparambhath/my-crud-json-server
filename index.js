const jsonServer = require('json-server')

// create a server for crud app
const crudAppServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router('db.json')

// Returns middlewares used by JSON Server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use middleware and router in server
crudAppServer.use(middlewares)
crudAppServer.use(router)

// to listen server for resolving request from client
crudAppServer.listen(port,()=>{
    console.log(`Crud Server started at port ${port},and waiting for client request!!!`);
})