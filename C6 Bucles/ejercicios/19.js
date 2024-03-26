function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sum = 0
  for (let index = 1; index <= n; index++) {
    sum = sum + index  
  }
  return sum
}

module.exports = sumarHastaN;
