function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if(letra.length > 1) return "Dato incorrecto"
  const vocales = ['a', 'e', 'i', 'o', 'u']
  for (let index = 0; index < vocales.length; index++) {
    const element = vocales[index];
    if(letra === element){
      return "Es vocal"
    }
  }
  return "Dato incorrecto"
}

module.exports = esVocal;
