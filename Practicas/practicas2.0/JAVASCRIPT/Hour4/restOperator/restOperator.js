function mostrarArgumentos(...args) {
  console.log(args); // Los argumentos se agrupan en un array
}

mostrarArgumentos(1, 2, 3, 4, 5);

console.log();
function ejemploArguments() {
  console.log(arguments); // Objeto similar a un array
  console.log(arguments.map); // undefined (no tiene metodos de array)
}

ejemploArguments(1, 2, 3);

console.log();
function mostrarDatos(nombre, edad, ...hobbies) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  console.log(`Hobbies: ${hobbies}`); // Hobbies es un array
}

mostrarDatos("Juan", 30, "Fútbol", "Música", "Cine");
