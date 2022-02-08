let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole");

readConsole.leerConsola()
.then((objeto)=>{
    return writeAndReadObject.escribeYLee(objeto)
})
.then((datos)=>{
    console.log(datos);
})
.catch((error)=>{
    console.log(error)
})
