function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código
  let prev = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if(prev !== element){
      return false
    }
    prev = element;
  }
  return true;
  // codigo generado por chatgpt: 
  // return array.every(element => element === array[0]);
}

module.exports = todosIguales;
