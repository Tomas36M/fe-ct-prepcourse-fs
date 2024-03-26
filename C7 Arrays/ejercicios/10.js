function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.length >= 5){
      return element
    }
  }
  return undefined
}


module.exports = obtenerPrimerStringLargo;
