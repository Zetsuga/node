class Professional {

    constructor(name, age, genre, weight, height, hairColor, eyeColor, 
        race, isRetired, nationality, oscarsNumber, profession,image){
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.image = image;
    }

    toString()
    {
        return "Nombre: "+ this.name + "\n" +
                "Edad: " + this.age + "\n" +
                "Genero: " + this.genre + "\n" +
                "Peso:" + this.weight + "\n" +
                "Altura:" + this.height + "\n`"+
                "Color de pelo: " + this.hairColor + "\n" +
                "Color de ojos: " + this.eyeColor + "\n" +
                "Raza: " + this.race + "\n" +
                "¿Está retirado?: " + this.isRetired + "\n" +
                "Nacionalidad: " + this.nationality + "\n" +
                "Número de Oscars: " + this.oscarsNumber + "\n" +
                "Profesión: " + this.profession + "\n" 
    }

    SoloNombre(){
        return `${this.name}`; 
    }

    toHtml(){
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.name}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.name}</h5>`
        +  `<p class="card-text">Edad: ${this.age}<br>`
        +   `Genero:  ${this.genre}<br>` 
        +   `Peso: ${this.weight}<br>` 
        +   `Altura: ${this.height}<br>`
        +   `Color de pelo: ${this.hairColor}<br>`
        +   `Color de ojos: ${this.eyeColor}<br>`
        +   `Raza: ${this.race}<br>`
        +   `¿Está retirado?: ${this.isRetired}<br>`
        +   `Nacionalidad: ${this.nationality}<br>`
        +   `Número de Oscars: ${this.oscarsNumber}<br>`
        +   `Profesión: ${this.profession}<br>` 
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

module.exports = {Professional}