function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === "Enero" || element === "Marzo" || element === "Noviembre"){
      newArr.push(element)
    }
  }
  return newArr.length ? newArr : "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
