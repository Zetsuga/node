const express = require("express");
const app = express();
const profesional = require("./professionals");
let cors = require("cors");


let persona1 = new profesional.Professional("Julio", 40, "hombre", 70, 175, "castaño", 
"verde", "oriental", false, "español", 0, "actor", "./img/act1.jpg");

let persona2 = new profesional.Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor", "./img/act2.jpg");

let persona3 = new profesional.Professional("Javi", 30, "hombre", 115, 178, "negro", 
"marron", "latina", false, "español", 0, "actor","./img/act3.jpg");

let persona4 = new profesional.Professional("Oliver", 37, "hombre", 114, 162, "castaño", 
"verde", "latina", false, "español", 2, "actor", "./img/act4.jpg");

let persona5 = new profesional.Professional("Jose", 35, "hombre", 130, 188, "castaño", 
"marron", "latina", false, "español", 15, "actor", "./img/act5.jpg");

let persona6 = new profesional.Professional("Laura", 25, "mujer", 60, 170, "rosa", 
"gris", "latina", false, "español", 0, "actor", "./img/act6.jpg");

let arrayActores =[persona1,persona2,persona3,persona4,persona5,persona6]

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

let actor = null;

app.get("/", function(request,response){

    let texto = {titulo: "Aplicación IMDB", direcciones : [{ruta : "/profesional", acciones: "ver/crear/modificar/eliminar"},
    {ruta : "/profesionales", acciones: "ver/crear/modificar/eliminar/buscar"}]};
    response.send(texto);
});

app.get("/profesionales",function(request,response){
    
    if(request.query.id!="null"){
        if(request.query.id <= arrayActores.length && request.query.id>=0){
            respuesta = { error: false, codigo:200, mensaje: "Actor encontrado",resultado:arrayActores[request.query.id]}
        }else{
            respuesta = { error: true, codigo:200, mensaje: "No hay actores para mostrar",resultado:null}
        }
    }else{
        respuesta = { error: false, codigo:200, mensaje: "lista de actores",resultado:arrayActores}
    }
    response.send(respuesta);
});

app.post("/profesionales", function(request,response){
    let temp = request.body; 
    if(actor === null){
        actor = new profesional.Professional(temp.name,temp.age,temp.genre,temp.weight,temp.height
            ,temp.hairColor,temp.eyeColor,temp.race,temp.isRetired,temp.nationality,temp.oscarsNumber,
            temp.profession,temp.image);
        arrayActores.push(actor);

        respuesta = { error: false, codigo:200, mensaje: "Actor añadido a la lista",resultado:arrayActores};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor no creado",resultado:null}
    }

    response.send(respuesta);
})

app.put("/profesionales", function(request,response){
    let temp = request.body.actor;
    let id = request.body.id.id;
    console.log(id3)
    console.log(arrayActores[id])
    if(id <= arrayActores.length && id>=0){
        arrayActores[id].name = temp.name;
        arrayActores[id].age = temp.age;
        arrayActores[id].genre = temp.genre;
        arrayActores[id].weight = temp.weight;
        arrayActores[id].height = temp.height;
        arrayActores[id].hairColor = temp.hairColor;
        arrayActores[id].eyeColor = temp.eyeColor;
        arrayActores[id].race = temp.race;
        arrayActores[id].isRetired = temp.isRetired;
        arrayActores[id].nationality = temp.nationality;
        arrayActores[id].oscarsNumber = temp.oscarsNumber;
        arrayActores[id].profession = temp.profession;
        arrayActores[id].image = temp.image;
        respuesta = { error: false, codigo:200, mensaje: "Actor modificado en la lista",resultado: arrayActores};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor no modificado",resultado:null}
    }

    response.send(respuesta);
});

app.delete("/profesionales", function(request,response){
    let id = request.body.id;
    if(id <= arrayActores.length && id>=0){
        arrayActores.splice(id,1);
        respuesta = { error: false, codigo:200, mensaje: "Actor eliminado de la lista",resultado: arrayActores};
    }else{
        respuesta = { error: true, codigo:200, mensaje: "Actor no modificado",resultado:null}
    }

    response.send(respuesta);
})

app.use((request,response,next)=>{
    respuesta = {error: true, codigo: 404, mensaje: "Url no encontrada"};
    response.status(404).send(respuesta);
})

app.listen(3000);