function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(!array.length) return 0
  const max = Math.max(...array);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === max){
      return index
    }
  }
}

module.exports = encontrarIndiceMayor;
