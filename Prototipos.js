//PROTOTIPOS: mecanismo por el cual todos los objetos o elementos de Javascript pueden extender
//sus propiedades o métodos.

//HERENCIA es el método por el cual los objetos tranfieren sus propiedades o métodos.

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

var continente = new LatinoAmerica();
continente.agregarPais('Mexico')