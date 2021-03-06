//Llamamos el modulo http
const http= require('http');
//Establecemos la url o IP de nuestro servidor.
const hostname = 'localhost';
//Establecemos el puerto de escucha
const port = 18000;
//Creamos una instancia HTTP con un request y un response
const server = http.createServer((req,res)=> {
    //El servidor respondera un codigo 200
    res.statusCode = 200;
    //El servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/html');
    //El servidor respondera el mensaje hola mundo
    res.end('<h1>Hola Mundo</h1>');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});

//Esto es codigo como servicio por lo que ya no es necesario utilizar apache para ejecutarlo`