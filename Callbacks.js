var devuelvoUsuario = function () {
    return 'Camilo';
};

var devuelvoSaludo = function () {
    return 'Hola';
};

function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

 //Nuevo ejemplo callback
 var devuelvoFrase = function (comida) {
    return 'Hoy quiero comer: ' + comida;
 };

var hablar = function (comida, cb) {
    return cb(comida);
};

var fraseFinal = hablar('Pizza', devuelvoFrase)
console.log(fraseFinal);

//OTRO ejemplo callback
function primero (segundo) {
    setTimeout(function () {
        console.log("Primero");
        segundo();
    }, 3000);
}
function segundo () {
    console.log("Segundo");
}
primero(segundo);

