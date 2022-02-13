
function getPokemon(buscar){
    let url =`http://127.0.0.1:3000/pokemon?buscar=${buscar}`;
    let param ={
        headers : {"Content-type" : "application/json; charset = uTF-8"},
        method : "GET" 
    }

    fetch(url,param)
    .then((data)=>{
        return data.json();
    })
    .then((datos)=>{
        if(!datos.error){
            crearAlertaTrue(datos.mensaje,datos.titulo)
            cargarPokemon(datos.pokemon);
        }else{
            crearAlertafalse(datos.mensaje,datos.titulo)
        }
        
        console.log(datos)
    })
    .catch((error)=>{
        console.log(error);
    })
}

function cargarPokemon(pokemon){
    let color = false;
    let imagen = document.getElementById("imagen__pokemon");
    let nombre = document.getElementById("nombre");
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let habilidades = document.getElementById("habilidades");
    let tipo = document.getElementById("tipo");
    let movimientosLvl = document.getElementById("lvl");
    let movimientosMt = document.getElementById("mt");
    let lvl=`<h3 class="titulo__movimientos">Movimientos al subir de nivel</h3>
                <table class="table tablaLvl table-striped table-hover">
                <thead>
                    <td scope="col">Lvl</td>
                    <td scope="col">Nombre</td>
                    <td scope="col">Generación</td>
                </thead>
                <tbody>`;
    let mt=`<h3 class="titulo__movimientos">Movimientos con MT/MO</h3>
                <table class="table tablaMt table-striped table-hover">
                <thead>
                    <td scope="col">Lvl</td>
                    <td scope="col">Nombre</td>
                    <td scope="col">Generación</td>
                </thead>
                <tbody>`;

    imagen.src = pokemon.imagen.home.front_default;
    nombre.innerHTML += pokemon.nombre;
    peso.innerHTML += pokemon.peso;
    altura.innerHTML += pokemon.altura;

    for(atributo in pokemon.tipo){
        tipo.innerHTML += pokemon.tipo[atributo].type.name + "\n";
        if(pokemon.tipo[atributo].type.name =="steel"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--acero"; 
        }else if(pokemon.tipo[atributo].type.name =="water"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--agua"; 
        }else if(pokemon.tipo[atributo].type.name =="bug"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--bicho"; 
        }else if(pokemon.tipo[atributo].type.name =="dragon"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--dragon"; 
        }
        else if(pokemon.tipo[atributo].type.name =="water"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--agua"; 
        }else if(pokemon.tipo[atributo].type.name =="electric"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--electrico"; 
        }else if(pokemon.tipo[atributo].type.name =="ghost"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--fantasma"; 
        }else if(pokemon.tipo[atributo].type.name =="fire"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--fuego"; 
        }else if(pokemon.tipo[atributo].type.name =="fairy"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--hada"; 
        }else if(pokemon.tipo[atributo].type.name =="ice"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--hielo"; 
        }else if(pokemon.tipo[atributo].type.name =="fighting"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--lucha"; 
        }else if(pokemon.tipo[atributo].type.name =="normal"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--normal"; 
        }else if(pokemon.tipo[atributo].type.name =="grass"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--planta"; 
        }else if(pokemon.tipo[atributo].type.name =="psychic"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--psiquico"; 
        }else if(pokemon.tipo[atributo].type.name =="rock"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--roca"; 
        }else if(pokemon.tipo[atributo].type.name =="dark"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--siniestro"; 
        }else if(pokemon.tipo[atributo].type.name =="ground"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--tierra"; 
        }else if(pokemon.tipo[atributo].type.name =="poison"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--veneno"; 
        }else if(pokemon.tipo[atributo].type.name =="flying"  && color==false){
            color=true;
            let pokemonDatos = document.getElementById("pokemon__datos");
            pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha--volador"; 
        }
    }

    for(habilidad in pokemon.habilidades){
        habilidades.innerHTML += pokemon.habilidades[habilidad].ability.name +"\n";
    }

    for(let i=0; i<pokemon.movimientos.length;i++){
        for(j=0; j<pokemon.movimientos[i].version_group_details.length;j++){
            if(pokemon.movimientos[i].version_group_details[j].move_learn_method.name =="level-up"){
                lvl+= `<tr>
                <td class="movimiento__texto">${pokemon.movimientos[i].version_group_details[j].level_learned_at}</td>
                <td class="movimiento__texto">${pokemon.movimientos[i].move.name}</td>
                <td class="movimiento__texto">${pokemon.movimientos[i].version_group_details[j].version_group.name}</td>
                </tr>`;
            }else{
                mt+= `<tr>
                <td class="movimiento__texto">${pokemon.movimientos[i].version_group_details[j].level_learned_at}</td>
                <td class="movimiento__texto">${pokemon.movimientos[i].move.name}</td>
                <td class="movimiento__texto">${pokemon.movimientos[i].version_group_details[j].version_group.name}</td>
                </tr>`;
            }

        }
        // for(atributo in pokemon.movimiento[i].move){
        //     console.log(pokemon.movimiento[i].move);
        //     
        // }
    }
    
    lvl +=`</tbody>
            </table>`;
    mt +=`</tbody>
    </table>`;
    movimientosLvl.innerHTML = lvl;
    movimientosMt.innerHTML = mt;
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
function buscarPokemon(){
    let buscar = document.getElementById("buscar").value;
    limpiarPokemon();
    getPokemon(buscar);
}

function limpiarPokemon(){
    let imagen = document.getElementById("imagen__pokemon");
    let nombre = document.getElementById("nombre");
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let habilidades = document.getElementById("habilidades");
    let tipo = document.getElementById("tipo");
    let movimientosLvl = document.getElementById("lvl");
    let movimientosMt = document.getElementById("mt");

    imagen.src = "";
    nombre.innerHTML = "";
    peso.innerHTML = "";
    altura.innerHTML = "";
    tipo.innerHTML = "";
    habilidades.innerHTML = "";
    movimientosLvl.innerHTML = "";
    movimientosMt.innerHTML = "";

    let pokemonDatos = document.getElementById("pokemon__datos");
    pokemonDatos.className="col-sm-12 col-md-4 inset-2 borde__ficha"; 
}
