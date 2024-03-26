function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const map = array.map(e => e.toUpperCase());
  return map
}

module.exports = convertirStringAMayusculas;
