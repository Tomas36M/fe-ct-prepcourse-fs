function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const six = [];
  for (let index = 0; index <= 10 ; index++) {
    six.push(index * 6)
  }
  return six;
}

module.exports = tablaDelSeis;
