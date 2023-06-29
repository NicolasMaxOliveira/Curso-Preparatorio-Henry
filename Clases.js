// Las clases son como plantillas o modelos que nos van a permitir crear un molde de propiedades o métodos.
// FUNCION CONSTRUCTORA: Forma antigua de declarar las clases
// Primera letra siempre CAPS
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}
let miPrimerAuto = new Auto(2, 'Verde', 'Ferrari', '2015', 4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

// EXPRESION DE CLASE: forma actual de declarar una clase.
// Las CLASES tienen 2 tipos de datos: propiedades y métodos. Abajo son propiedades.
// METODOS son funciones dentro de la clase.
class Auto{
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
}

let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);