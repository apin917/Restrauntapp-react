//import jon-server
const jsonserver = require('json-server');

//create a server using jsonserver
const server =jsonserver.create()

//setup path for db.json
const router =jsonserver.router('db.json')

//return a middleware used by jsonserver
const middleware =jsonserver.defaults()

//setup port number
const port = process.env.PORT || 3001 //default port number for backend

//use in server
server.use(middleware)
server.use(router)

//to run the port
server.listen(port,()=>{
    console.log('jsonserver listening on port 3001');
})