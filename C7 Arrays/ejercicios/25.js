function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  const pair = numeros.filter(e => e % 2 === 0)
  return pair.length
}

module.exports = contarParesConContinue;
