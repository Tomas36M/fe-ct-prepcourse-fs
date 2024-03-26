function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const newArr = array.map((e, i) => {
    return e * i
  })
  return newArr
}

module.exports = multiplicarElementosPorIndice;
