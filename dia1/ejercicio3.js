let fs = require("fs");
const { stdin, stdout } = require("process");
let rl = require("readline");

let file = "./persona.json";

let persona = {
     "name" : "",
     "surname" : "",
     "age" : 0
 };

let consola = rl.createInterface(stdin,stdout);

consola.question("¿Nombre del usuario? " , (respuesta)=>{
    persona.name = respuesta;
    consola.question("¿Apellido del usuario?",(respuesta)=>{
        persona.surname = respuesta;
        consola.question("¿Edad del usuario?",(respuesta)=>{
            persona.age = respuesta;
            consola.close();
            
            fs.writeFile("persona.json",JSON.stringify(persona),()=>{
                fs.readFile("persona.json",(error,datos)=>{
                    if(error) throw error;
                    console.log(JSON.parse(datos));
                })
            });

            // let leer = rl.createInterface({
            //     input : fs.createReadStream(file),
            //     output : process.stdout
            // })

        });
    });
});
