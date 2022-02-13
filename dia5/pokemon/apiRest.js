const express = require("express");
const app = express();
const axios = require("axios");
let cors = require("cors");
const { Console } = require("console");
const { ADDRGETNETWORKPARAMS } = require("dns");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/pokemon",function(request,response){

    let busqueda = request.query.buscar;

    let url =`https://pokeapi.co/api/v2/pokemon/${busqueda}/`;
    axios.get((url))
    .then((data)=>{

        let pokemon = {
            "nombre" : data.data.name,
            "tipo" : data.data.types,
            "imagen" : data.data.sprites.other,
            "movimientos" : data.data.moves,
            "peso" : data.data.weight,
            "altura" : data.data.height,
            "habilidades" : data.data.abilities
        }

        let respuesta ={
            "error" : false,
            "code" : 200,
            "mensaje" : "pokemon encontrado correctamente",
            "titulo" : "Busqueda satisfactoria",
            "pokemon" : pokemon
        }
        response.send(respuesta);
        
    })
    .catch((error)=>{
        let respuesta ={
            "error" : true,
            "code" : 200,
            "mensaje" : "pokemon no encontrado",
            "titulo" : "Error",
            "error" : error
        }
        response.send(respuesta)
        //console.log(error)
    })

})

app.use((request,response,next)=>{
    respuesta = {error: true, codigo: 404, mensaje: "Url no encontrada"};
    response.status(404).send(respuesta);
})

app.listen(3000);