function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const sum = arrayOfNums.reduce((prev, curr) => {
    return prev + curr
  })
  return sum
}

module.exports = agregarNumeros;
