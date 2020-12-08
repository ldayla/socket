  // aqui vamos a definir las funciones que queremos que se disparen cuando  interatuamos conel servidor

  var socket = io();
  socket.on('connect', function() {

          console.log("conectado a al servidor");
      })
      //.on() para escuchar sucesos
  socket.on('disconnect', function() {
      console.log("perdimos la conexion con el servidor");
  })
  socket.on('enviarMensaje', function(data) {
          console.log("mensaje broadcast:" + data.nombre);
      })
      //.emit para emitir algo comunicarse 
  socket.emit('enviarMensaje', {
      nombre: "fernando",
      message: "hola mundo"
  }, function(recibido) {
      console.log(recibido);
  })