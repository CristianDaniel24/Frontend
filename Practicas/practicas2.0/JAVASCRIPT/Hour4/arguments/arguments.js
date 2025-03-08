function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Carlos", 25);

console.log();
function mostrarInfo(nombre, edad) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostrarInfo("Ana"); // Edad sera undefined

console.log();
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 10, 15, 20)); // Solo suma 5 + 10 y los otros argumentos son ignorados
