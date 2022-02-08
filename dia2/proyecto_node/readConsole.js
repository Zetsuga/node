const { resolve } = require("path");
let readline = require("readline");

let persona = {
     "name" : "",
     "surname" : "",
     "age" : 0
 };

function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
    rl.question(pregunta, (respuesta)=>{
        resolve(respuesta);
        rl.close();
    });
    });

    return question;
}

function leerConsola(){
    const lectura = new Promise((resolve,reject)=>{
        pregunta("¿Nombre del usuario? ")
        .then((nombre)=>{
            persona.name = nombre;
            return pregunta("¿Apellido del usuario? ")
        })
        .then((apellido)=>{
            persona.surname = apellido;
            return pregunta("¿Edad del usuario? ")
        })
        .then((edad)=>{
            persona.age = edad;
            resolve(persona);
        })
        .catch((error)=>{
            console.log(error);
            reject(error);
        })
    })
    return lectura;
}

module.exports = {leerConsola}