function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
  for (let index = 0; index < dias.length; index++) {
    const element = dias[index];
    if(numero === index + 1){
      return element
    }
  }
  return "No es un dia de la semana"
}

module.exports = obtenerDiaSemana;