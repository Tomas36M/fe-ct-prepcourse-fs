function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const result = resultadosTest.reduce((prev, curr) => {
    return prev + curr
  })
  return result / resultadosTest.length
}

module.exports = promedioResultadosTest;
