let nombre = "Juan"; // Variable global

function saludar() {
  console.log("Hola, " + nombre); // Se puede acceder a nombre
}

saludar();

console.log(nombre); // Se puede acceder a nombre fuera de la funcion

console.log();
function mostrarEdad() {
  let edad = 25; // Variable local
  console.log("Edad:", edad);
}

mostrarEdad();
console.log(edad); // La variable edad no esta definida o es una variable local
