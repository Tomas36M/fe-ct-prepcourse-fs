function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const filt = array.filter(e => e % 2 === 0);
  return filt
}

module.exports = filtrarNumerosPares;
