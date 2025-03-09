let variable: any = "Hola"; //Como es de tipo any, se pueden asignar valores de cualquier tipo sin advertencias
variable = 123;
variable = true;

let usuario: any = { nombre: "Juan", edad: 30 };
// TypeScript no detecta errores
console.log(usuario.toUpperCase()); //ERROR en tiempo de ejecucion

function suma(a: any, b: any) {
  return a + b;
}

console.log(suma(5, "10")); // 510 ERROR: Se concatenan en vez de sumarse

//Si realmente no se sabe que tipo de dato tendra una variable se usa unknown
let valor: unknown = "Hola";

// TypeScript obliga a comprobar el tipo antes de usarlo
if (typeof valor === "string") {
  console.log(valor.toUpperCase());
}
