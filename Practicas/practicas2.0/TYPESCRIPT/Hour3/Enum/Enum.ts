enum EstadoPedido {
  Pendiente, // 0
  EnProceso, // 1
  Enviado, // 2
  Entregado, // 3
}

console.log(EstadoPedido.Pendiente); // 0
console.log(EstadoPedido.Entregado); // 3

//Asignar valores manualmente
enum RolUsuario {
  Usuario = 1,
  Moderador = 5,
  Administrador = 10,
}

console.log(RolUsuario.Moderador); // 5
console.log(RolUsuario[10]); // "Administrador"

// Si un valor no es asignado se incrementa automaticamente desde el anterior
enum NivelAcceso {
  Invitado = 1,
  Usuario, // 2
  Admin, // 3
}

console.log(NivelAcceso.Usuario); // 2

enum EstadoTarea {
  Pendiente = "PENDIENTE",
  EnProgreso = "EN_PROGRESO",
  Completada = "COMPLETADA",
}

console.log(EstadoTarea.Pendiente); // "PENDIENTE"
console.log(EstadoTarea.Completada); // "COMPLETADA"

enum RespuestaServidor {
  Exito = 200,
  Error = "ERROR",
  NoAutorizado = 401,
}

console.log(RespuestaServidor.Exito); // 200
console.log(RespuestaServidor.Error); // "ERROR"

// Recorrer un enum
enum Dia {
  Lunes = "LUN",
  Martes = "MAR",
  Miercoles = "MIE",
}

Object.values(Dia).forEach((dia) => console.log(dia));
// "LUN"
// "MAR"
// "MIE"
