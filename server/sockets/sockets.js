const { io } = require('../server')

// aqui sabemos cuando se han conectado al servidor
io.on('connection', (client) => { // este objeto cliente tiene toda la informacion del cliente conectado al servidor
    console.log("cliente conectado");
    client.emit('mensajeBienve', {
        user: "administrador",
        message: "bienvenido"
    })
    client.on('disconnect', () => { // este objeto cliente tiene toda la informacion del cliente conectado al servidor
        console.log("el cliente se ha desconectado");
    })

    //escuchar mensaje del cliente
    client.on('enviarMensaje', (data, callback) => {
        client.broadcast.emit('enviarMensaje', data)
            // if (!callback)
            //     return;
            // if (mensaje.nombre) {
            //     callback({
            //         respuesta: "mensaje enviado correctamemte"
            //     })
            // } else {
            //     callback({
            //         respuesta: "faltaron daros en el mensaje"
            //     })
            // }
    })
})