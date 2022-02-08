let fs =require("fs");

let persona = {
    "name" : "Jose",
    "surname" : "Ors",
    "age" : "41"
};

fs.writeFile("persona.json",JSON.stringify(persona),(error)=>{
    if(error) throw error;
    console.log("Archivo salvado");
    fs.readFile("persona.json",(error,datos)=>{
        if(error) throw error;
        console.log(JSON.parse(datos));
    })
});

