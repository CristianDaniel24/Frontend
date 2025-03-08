let obj = { nombre: "Juan" }; // Se asigna memoria para el objeto
obj = null; // Ahora el objeto puede ser eliminado por el GC

console.log(obj);

function crearObjeto() {
  let obj = { nombre: "Juan" }; // Se asigna memoria
} // obj deja de existir al salir de la funcion, el GC lo elimina
