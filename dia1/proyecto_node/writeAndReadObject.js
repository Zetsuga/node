let fs = require("fs");

function escribeYLee(objeto){

    fs.writeFile("persona.json",JSON.stringify(objeto),(error)=>{
        if(error) throw error;
        console.log("\nArchivo salvado");
        fs.readFile("persona.json",(error,datos)=>{
            if(error) throw error;
            console.log(JSON.parse(datos));
        })
    });
    
}

module.exports = {escribeYLee}
