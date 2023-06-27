var deportes = { 
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

var persona = {nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};
//var Objeto = {claveKey: valor};

//Dot-Notation -> notación con punto.

//ASIGNAR prop
persona.nombre = 'Martin';
persona.edad = '32';
console.log(persona.edad);

//CREAR propiedades de objetos:
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];

//DELETE prop
delete autos.marcas;
console.log(autos);

// Funcion dentro de las propiedades de objetos
var misFunciones = {
    saludar: function () {
        console.log("Hola");
    },
};
misFunciones.saludar();

var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
atuendos["piernas"] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//Variable externa como propiedad del objeto. Bracket:
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable','NoSaludable');
console.log(comidas);

//hasOwnProperty - boolean
var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad)

//Object.Keys --> Lista todas las propiedades:
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//FOR-IN para recorrer objetos:
// Variable PROP utilizar [prop] para recorrer objetos.
var mundo = { continentes: 7, paises: 195, oceanos: 5};
for (var prop in mundo) {
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: ' + mundo[prop]);
};

//THIS cambia el contexto para especificar un objeto --> this.raza
var mascota = {
    animal: "Perro", 
    raza: 'Ovejero aleman', 
    amistoso: true, 
    dueña: 'Maria Lopez',
    info: function() {
        console.log('Mi perro es un ' + this.raza);
    }, 
};
mascota.info();