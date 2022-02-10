const express = require("express");
const app = express();
const profesional = require("./professionals");

app.use(express.json());
app.use(express.urlencoded({extended : false}));

let actor = null;

app.get("/", function(request,response){

    let texto = {titulo: "Aplicación IMDB", direcciones : [{ruta : "/profesional", acciones: "ver/crear/modificar/eliminar"}]};
    response.send(texto);
});

app.get("/profesional", function(request,response){
    if(actor === null ){
        respuesta = { error: true, codigo:200, mensaje: "Actor no encontrado",
                    resultado:actor}
    }else{
        respuesta = { error: false, codigo:200, mensaje: "Actor encontrado",
                    resultado:actor}
    }

    response.send(respuesta);
});

app.post("/profesional", function(request,response){
    let temp = request.body; 
    if(actor === null){
        actor = new profesional.Professional(temp.name,temp.age,temp.genre,temp.weight,temp.height
            ,temp.hairColor,temp.eyeColor,temp.race,temp.isRetired,temp.nationality,temp.oscarsNumber,
            temp.profession,temp.image);
            respuesta = { error: false, codigo:200, mensaje: "Actor creado",resultado:actor};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor ya en BBDD",resultado:null}
    }

    response.send(respuesta);
});

app.put("/profesional", function(request,response){
    let temp = request.body; 
    if(actor != null){
        actor.name = temp.name;
        actor.age = temp.age;
        actor.genre = temp.genre;
        actor.weight = temp.weight;
        actor.height = temp.height;
        actor.hairColor = temp.hairColor;
        actor.eyeColor = temp.eyeColor;
        actor.race = temp.race;
        actor.isRetired = temp.isRetired;
        actor.nationality = temp.nationality;
        actor.oscarsNumber = temp.oscarsNumber;
        actor.profession = temp.profession;
        actor.image = temp.image;

        respuesta = { error: false, codigo:200, mensaje: "Actor modificado",resultado:actor};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor no creado",resultado:null}
    }

    response.send(respuesta);
});

app.delete("/profesional", function(request,response){
    let temp = request.body; 
    if(actor != null && actor.name == temp.name){
        actor =null;
        respuesta = { error: false, codigo:200, mensaje: "Actor eliminado",resultado:actor};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor no creado",resultado:null}
    }

    response.send(respuesta);
});

app.use((request,response,next)=>{
    respuesta = {error: true, codigo: 404, mensaje: "Url no encontrada"};
    response.status(404).send(respuesta);
})

app.listen(3000);