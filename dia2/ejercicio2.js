let fs =require("fs/promises");

let persona = {
    "name" : "Jose",
    "surname" : "Ors",
    "age" : "41"
};

fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{
    return fs.readFile("persona.json");
})
.then(personaRaw =>{
    console.log(JSON.parse(personaRaw));
})
.catch(error =>{
    console.log(error);
})