class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, me llamo ' +this.nombre + '. Tengo ' + this.edad);
    }
}

// var martin = new Persona('Martin', 26);
// martin.saludar();

// SUPER sirve para utilizar las clases heredadas del extends.
class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
            super(nombre, edad);
            this.añosDeExperiencia = añosDeExperiencia;
        }
    codear() {
        console.log(
            'Soy ' + this.nombre +
            '. Codeo desde hace ' +
            this.añosDeExperiencia +
            ' años.'
        );
}
}
let martin = new Persona('Martin', 26);
let programador = new Programador ('Maria', 37, 4);
martin.saludar();
programador.codear();