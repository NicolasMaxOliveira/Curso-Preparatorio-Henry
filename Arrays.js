var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
console.log(listaDeCompras[1]);

var elementoDelArray = listaDeCompras[1];
console.log(listaDeCompras.length);

// Length
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
colores.pop(); // elimina el ultimo elemento de la lista
colores.shift(); //elimina el primer elemento de la lista
console.log(colores);


// INCLUDES -> booleano, si un array incluye un elemento

var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes('Moreti'); // booleano si el valor se incluye en la lista
console.log(incluyeDali);


//método EVERY: Verifica si todos los métodos de un Array cumplen con una condición

var numeros = [11, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);


// POP -> elimina y devuelve el ultimo elemento de la lista
// PUSH -> añade elementos al final del arreglo y devuelve la nueva longitud del array
// SHIFT -> elimina y devuelve el primer elmento del arreglo
// UNSHIFT -> agrega elementos al inicio de un arreglo y devuelve la nueva longitud del array

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

palabraSeparada.pop(); //
palabraSeparada.push('y');
// console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join(''); // junta todos los caracteres, elimina por las ''
console.log(palabraArreglada);


// FOR EACH -> permite recorrer elemento por elemento un Array, realizando una acción para cada elemento

var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
 numeros.forEach((num) => {
    if (num > 2) {
        console.log(num);
    }
});


// MAP -> recorre un arreglo y nos permite realizar modificaciones
var numeros = [1, 2, 3, 4];
var masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);