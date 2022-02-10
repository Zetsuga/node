class Movie{

    constructor(title, releaseYear ,nacionality ,genre){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }

    toString(){
        let actores ="";
        for(let actor in this.actors){
            actores += this.actors[actor].toString() + ", ";
        }
        return `Título: ${this.title}\n` +
        `Año publicado: ${this.releaseYear}\n` +
        `Actores: ${actores}\n` +
        `Nacionalidad: ${this.nacionality}\n` +
        `Director: ${this.director}\n` +
        `Guionista: ${this.writer}\n` +
        `Idioma: ${this.language}\n` +
        `Plataforma: ${this.plataform}\n` +
        `¿Es MCU?: ${this.isMCU}\n` +
        `Personaje principal: ${this.mainCharacterName}\n` +
        `Productor: ${this.producer}\n` +
        `Distribuidor: ${this.distributor}\n` +
        `Genero: ${this.genre}\n`;
    }

    toHtml(){
        let actores ="";
        for(let actor in this.actors){
            actores += ` ${this.actors[actor].SoloNombre()},`;
        }
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.title}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.title}</h5>`
        +  `<p class="card-text">`
        +   `Año publicado: ${this.releaseYear}<br>`
        +   `Actores: ${actores}<br>`
        +   `Nacionalidad: ${this.nacionality}<br>`
        +   `Director: ${this.director}<br>`
        +   `Guionista: ${this.writer}<br>` 
        +   `Idioma: ${this.language}<br>` 
        +   `Plataforma: ${this.plataform}<br>` 
        +   `¿Es MCU?: ${this.isMCU}<br>` 
        +   `Personaje principal: ${this.mainCharacterName}<br>` 
        +   `Productor: ${this.producer}<br>`
        +   `Distribuidor: ${this.distributor}<br>`
        +   `Genero: ${this.genre}<br>`
        + `</p>`
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

module.exports = {Movie}