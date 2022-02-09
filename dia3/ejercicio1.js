const http = require('http');

const server = http.createServer(function (request,response){
    console.log("Petición recibida por el cliente");
    console.log("Request Method " + request.method);
    console.log("Request URL " + request.url);

    console.log("Cabecera request " + request.headers.host);
    console.log("Cabecera request " + request.headers['content-type']);
    console.log("Cabecera request " + request.headers['content-length']);
    console.log("Cabecera request " + request.headers['user-agent']);

    switch(request.url){
        case "/bye":
            console.log("Response status code " + response.statusCode);
            response.writeHead(200,{"Content-type" : "application/json"});
            response.write('{ok:true,message:"Adios!"}');
            response.end();
            break;
        default:
            console.log("Response status code " + response.statusCode);
            response.writeHead(200,{"Content-type" : "application/json"});
            response.write('{ok:true,message:"Recibido!"}');
            response.end();
    }
    
    
});
server.listen(3000);