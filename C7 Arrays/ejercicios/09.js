function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const random = Math.round(Math.random() * array.length)
   return array[random]
}

module.exports = obtenerElementoAleatorio;
