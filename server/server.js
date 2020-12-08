const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); // modulo que nos va a permitir levantar un servidor
const path = require('path');

const app = express();

//ya asi montamos el servidor con toda la configuracion que pudieramos hacer en express
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//iniciar el sockets.io , esta  va  a ser la comunicacion con el backend
module.exports.io = socketIO(server);
require('./sockets/sockets')



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});