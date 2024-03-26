function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  console.log(array);
  array.push(elemento)
  console.log(array);
  return [...array]
}

agregarItemAlFinalDelArray([1,1,1,1],2)

module.exports = agregarItemAlFinalDelArray;
