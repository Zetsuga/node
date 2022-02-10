let persona1 = new Professional("Julio", 40, "hombre", 70, 175, "castaño", 
"verde", "oriental", false, "español", 0, "actor", "./img/act1.jpg");

let persona2 = new Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor", "./img/act2.jpg");

let persona3 = new Professional("Javi", 30, "hombre", 115, 178, "negro", 
"marron", "latina", false, "español", 0, "actor","./img/act3.jpg");

let persona4 = new Professional("Oliver", 37, "hombre", 114, 162, "castaño", 
"verde", "latina", false, "español", 2, "actor", "./img/act4.jpg");

let persona5 = new Professional("Jose", 35, "hombre", 130, 188, "castaño", 
"marron", "latina", false, "español", 15, "actor", "./img/act5.jpg");

let persona6 = new Professional("Laura", 25, "mujer", 60, 170, "rosa", 
"gris", "latina", false, "español", 0, "actor", "./img/act6.jpg");

let arrayActor = [persona1,persona2,persona3];
let arrayActor2 = [persona2,persona5,persona4];
let arrayActor3 = [persona4,persona5,persona6];

let arrayActores =[persona1,persona2,persona3,persona4,persona5,persona6]


let pelicula1 = new Movie("Las cosas que cayeron solas",2017,"Francesa","Drama");
pelicula1.actors = arrayActor;
pelicula1.director = "Berlanga";
pelicula1.writer = "Shen zumiko";
pelicula1.language = "Albano";
pelicula1.plataform = "youtube";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Azoti";
pelicula1.producer ="Berlanga";
pelicula1.distributor = "Canal+";
pelicula1.image = "./img/peli1.jpg";

let pelicula2 = new Movie("Wakanda, ¿donde estas?",2020,"Americana","Documental");
pelicula2.actors = arrayActor3;
pelicula2.director = "Chihiro";
pelicula2.writer = "tokomoyo";
pelicula2.language = "Ingles";
pelicula2.plataform = "Disney+";
pelicula2.isMCU = true;
pelicula2.mainCharacterName = "ashata";
pelicula2.producer ="Marvel";
pelicula2.distributor = "Disney";
pelicula2.image = "./img/peli2.jpg";

let pelicula3 = new Movie("El robobo de la jojoya",1990,"Española","Comedia");
pelicula3.actors = arrayActor2;
pelicula3.director = "Jose Albeniz";
pelicula3.writer = "Jose Albeniz";
pelicula3.language = "Español";
pelicula3.plataform = "Tve";
pelicula3.isMCU = false;
pelicula3.mainCharacterName = "Josema Yuste";
pelicula3.producer ="RTVE";
pelicula3.distributor = "RTVE";
pelicula3.image = "./img/peli3.jpg";


let peliculas =[pelicula1,pelicula2,pelicula3];