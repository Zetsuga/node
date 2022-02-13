function toHtml(dato){
    return `<div class="col-xs-12 col-sm-6 col-md-4">`
    + `<div class="card">`
    + `<img class="card-img-top img-fluid imagen__pelicula" src="${dato.image}" alt="${dato.name}">`
    + `<div class="card-body">`
    +  `<h5 class="card-title">${dato.name}</h5>`
    +  `<p class="card-text">Edad: ${dato.age}<br>`
    +   `Genero:  ${dato.genre}<br>` 
    +   `Peso: ${dato.weight}<br>` 
    +   `Altura: ${dato.height}<br>`
    +   `Color de pelo: ${dato.hairColor}<br>`
    +   `Color de ojos: ${dato.eyeColor}<br>`
    +   `Raza: ${dato.race}<br>`
    +   `¿Está retirado?: ${dato.isRetired}<br>`
    +   `Nacionalidad: ${dato.nationality}<br>`
    +   `Número de Oscars: ${dato.oscarsNumber}<br>`
    +   `Profesión: ${dato.profession}<br>` 
    + `</div>`
    + `</div>`
    +`</div>`;
}


function getActor(){
    let id = document.getElementById("idBusqueda").value;
    if(id==""){
        id=null;
    }
    let url =`http://127.0.0.1:3000/profesionales?id=${id}`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    fetch(url,param)
    .then((data)=>{
        
        return data.json();
    })
    .then((datos)=>{
        if(datos.resultado != null){
            cargarActores(datos.resultado);
            crearAlertaTrue(datos.mensaje,(datos.error)?"Error":"Correcto");
        }else{
            crearAlertafalse(datos.mensaje,(datos.error)?"Error":"Correcto");
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

function postActor(){
    let actor = recogerDatos();
    let url =`http://127.0.0.1:3000/profesionales`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(actor),
        method : "POST" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(datos.resultado != null){
            cargarActores(datos.resultado);
            crearAlertaTrue(datos.mensaje,(datos.error)?"Error":"Correcto");
        }else{
            crearAlertafalse(datos.mensaje,(datos.error)?"Error":"Correcto");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function delActor(){
    let id = {"id" : document.getElementById("idBusqueda").value};
    let url =`http://127.0.0.1:3000/profesionales`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(id),
        method : "DELETE" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
        
    })
    .then((datos)=>{
        if(datos.resultado != null){
            cargarActores(datos.resultado);
            crearAlertaTrue(datos.mensaje,(datos.error)?"Error":"Correcto");
        }else{
            crearAlertafalse(datos.mensaje,(datos.error)?"Error":"Correcto");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function putActor(){
    let id = {"id" : document.getElementById("idBusqueda").value};
    let actor = recogerDatos();
    let datos = { 
        "id" : id,
        "actor" : actor }
    let url =`http://127.0.0.1:3000/profesionales`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        body : JSON.stringify(datos),
        method : "PUT" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
        
    })
    .then((datos)=>{
        if(datos.resultado != null){
            cargarActores(datos.resultado);
            crearAlertaTrue(datos.mensaje,(datos.error)?"Error":"Correcto");
        }else{
            crearAlertafalse(datos.mensaje,(datos.error)?"Error":"Correcto");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function cargarActores(arrayDatos){
    limpiarActores();
    if(Array.isArray(arrayDatos)){
        arrayDatos.forEach(element => {
            let actoreshtml = document.getElementById("actores");
            actoreshtml.innerHTML += toHtml(element);
        });
    }else{
        let actoreshtml = document.getElementById("actores");
        actoreshtml.innerHTML = toHtml(arrayDatos);
    }
}

function limpiarActores(){
    let actoreshtml = document.getElementById("actores");
    actoreshtml.innerHTML ="";
}

function recogerDatos(){
    let name = document.getElementById("nombre");
    let age = document.getElementById("edad");
    let genere = document.getElementById("genero");
    let weight = document.getElementById("peso");
    let height = document.getElementById("altura");
    let hairColor = document.getElementById("colorPelo");
    let eyeColor = document.getElementById("colorOjo");
    let race = document.getElementById("raza");
    let isRetired = document.getElementById("esRetirado");
    let nationality = document.getElementById("nacionalidad");
    let oscarsNumber = document.getElementById("oscars");
    let profession = document.getElementById("profesion");
    let image = document.getElementById("imagen");

    let actor = {
        "name" : name.value,
        "age" : age.value,
        "genere" : genere.value,
        "weight" : weight.value,
        "height" : height.value,
        "hairColor" : hairColor.value,
        "eyeColor" : eyeColor.value,
        "race" : race.value,
        "isRetired" : isRetired.value,
        "nationality" : nationality.value,
        "oscarsNumber" : oscarsNumber.value,
        "profession" : profession.value,
        "image" : image.value
    }

    return actor;
}

function crearAlertaTrue(text,title){
    let texto = text;
    let titulo = title;
    let toast = document.getElementById("toast");
    toast.innerHTML="";

    let alerta = `<div class="toast-header">
                <h4 class="mr-auto toast__titulo__verde">
                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="#0bb51f"></rect></svg>
                ${titulo}</h4>
                </div>
                <div class="toast-body toast__texto">
                    ${texto}
                </div>`;
    toast.innerHTML += alerta;
    var toastOn = new bootstrap.Toast(toast);

    toastOn.show()
}


function crearAlertafalse(text,title){
    let texto = text;
    let titulo = title;
    let toast = document.getElementById("toast");
    toast.innerHTML="";

    let alerta = `<div class="toast-header">
                <h4 class="mr-auto toast__titulo__rojo">
                <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="#d30404"></rect></svg>
                ${titulo}</h4>
                </div>
                <div class="toast-body toast__texto">
                    ${texto}
                </div>`;
    toast.innerHTML += alerta;
    var toastOn = new bootstrap.Toast(toast);

    toastOn.show()
}
getActor()