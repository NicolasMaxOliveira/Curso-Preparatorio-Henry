function calcularDigitoVerificador(partida) {
  let suma = 0;
  let factor = 2;

  for (let i = partida.length - 1; i >= 0; i--) {
    suma += parseInt(partida.charAt(i)) * factor;
    factor = factor === 1 ? 2 : 1;
  }

  const digitoVerificador = (10 - (suma % 10)) % 10;

  return digitoVerificador;
}

// Ejemplos
const ejemplos = [
  { partida: '3614398', digitoVerificador: '01' },
  { partida: '1917058', digitoVerificador: '01' },
  { partida: '2932753', digitoVerificador: '03' },
  { partida: '3077681', digitoVerificador: '01' },
  { partida: '1277396', digitoVerificador: '06' },
  { partida: '1403716', digitoVerificador: '00' },
];

ejemplos.forEach((ejemplo) => {
  const digitoCalculado = calcularDigitoVerificador(ejemplo.partida);
  console.log(
    `Partida: ${ejemplo.partida}, Dígito verificador: ${ejemplo.digitoVerificador}, Dígito calculado: ${digitoCalculado}`
  );
});