const express = require("express");
const app  = express();

app.use(express.json());

app.get("/",function (request,response){
    console.log("Petición recibida por el cliente");
    console.log("Request url " + request.url);
    console.log("Request Method " + request.method);
    console.log("Request user-agent " + request.headers["user-agent"]);
    let nombre = request.query.name;

    response.send(nombre); 
});

app.post("/",function (request,response){
    console.log("Petición recibida por el cliente");
    console.log("Request url " + request.url);
    console.log("Request Method " + request.method);
    console.log("Request user-agent " + request.headers["user-agent"]);

    let persona = request.body;

    response.json(persona); 
});

app.listen(3000);