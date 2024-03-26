function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = new Set();
  return numeros.find(numero => elementosVistos.has(numero) || elementosVistos.add(numero));
}

module.exports = encontrarElementoRepetido;