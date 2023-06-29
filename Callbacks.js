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

