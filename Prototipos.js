//PROTOTIPOS: mecanismo por el cual todos los objetos o elementos de Javascript pueden extender
//sus propiedades o métodos.

//PROTOTIPOS son un mecanismo por el cual todos los objetos o elementos de javascript pueden extender sus propiedades o métodos. 
//HERENCIA es el método por el cual los objetos globales extienden sus propiedades o métodos a cualquier tipo de dato.
//En conclusión, los prototipos son una manera de ejercer la herencia.

Array.prototype.mayoresQueTres = function() {
    var arregloModificado = [];

    for(let i = 0; i < this.length; i++) {
        if(this[i] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2 , 3, 4, 5];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo);

Array.prototype.suma = function() {
    var suma = 0;
    for(let i = 0; i < this.length; i++) {
        suma += this[i];
    }
    return suma;
};

class LatinoAmerica {
    constructor() {
        this.paises = [];
    }
}

LatinoAmerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
};

var continente = new LatinoAmerica()
continente.agregarPais('Mexico')
continente.agregarPais('Argentina')
continente.agregarPais('Chile')
console.log(continente.paises)
