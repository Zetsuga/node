let rl = require("readline");
const { stdin, stdout } = require("process");

function leerConsola(callback){
    let dato = {
        "name" : "",
        "surname" : "",
        "age" : 0
    };
    
    let consola = rl.createInterface(stdin,stdout);
    
    consola.question("¿Nombre del usuario? " , (respuesta)=>{
        dato.name = respuesta;
        consola.question("¿Apellido del usuario?",(respuesta)=>{
            dato.surname = respuesta;
            consola.question("¿Edad del usuario?",(respuesta)=>{
                dato.age = respuesta;
                consola.close();
                callback(dato);
            });
        });
    });
}

module.exports = {leerConsola};
