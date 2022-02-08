let fs = require("fs/promises");

function escribeYLee(objeto){
    const escribir = new Promise((resolve,reject)=>{
        fs.writeFile("persona.json", JSON.stringify(objeto))
        .then(()=>{
            return fs.readFile("persona.json");
        })
        .then((personaRaw) =>{
            resolve(JSON.parse(personaRaw));
        })
        .catch(error =>{
            reject(error);
        })
    })
    return escribir;
}

module.exports = {escribeYLee}