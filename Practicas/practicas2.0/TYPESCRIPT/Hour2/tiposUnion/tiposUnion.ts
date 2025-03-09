let variable: string | number;

variable = "Hola"; // Correcto
variable = 42; // Correcto
// variable = true; // Error: boolean no esta en la union

//
function imprimirID(id: string | number) {
  console.log(`El ID es: ${id}`);
}

imprimirID(123); // Correcto
imprimirID("ABC123"); // Correcto
// imprimirID(true); // Error: boolean no esta en la union

//
interface Usuario {
  id: string | number;
  nombre: string;
}

const user1: Usuario = { id: 101, nombre: "Carlos" }; // Correcto
const user2: Usuario = { id: "ABC123", nombre: "Ana" }; // Correcto
// const user3: Usuario = { id: true, nombre: "Juan" }; // Error: boolean no esta en la union
