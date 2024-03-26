function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  const array = [...arguments]
  if(array.length){
    const product = array.reduce((p, c) => {
      return p * c
    })
    return product
  } else if(array.length === 1){
    return array[0]
  } else {
    return 0
  }
  
}

multiplicarArgumentos()

module.exports = multiplicarArgumentos;
