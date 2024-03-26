function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let val;
  for (let index = 0; index < secuencia.length; index++) {
    const element = secuencia[index];
    if (element % n === 0) {
      val = element
      break
    }
  }
  return val !== undefined ? val : undefined;
}

module.exports = encontrarPrimerMultiploDeN;