let persona: [string, number];

persona = ["Juan", 25]; // ✅ Correcto
// persona = [25, "Juan"]; // Error: Orden incorrecto
// persona = ["Juan", 25, true]; // Error: Demasiados elementos

type Producto = [string, number, boolean];

let item: Producto = ["Laptop", 1200, true]; // Correcto

// Acceder a elementos
let usuario: [string, number] = ["Carlos", 30];

console.log(usuario[0]); // "Carlos"
console.log(usuario[1]); // 30

//Metodos
let persona2: [string, number] = ["Juan", 30];

persona2.push(40); // Se permite pero rompe la tupla
persona2.push("Texto"); // Error: No se esperaba un string

console.log(persona2); // ["Juan", 30, 40]

//
let datos: [string, number, boolean] = ["Ana", 25, true];

let eliminado = datos.pop(); // Elimina true

console.log(datos); // "Ana", 25
console.log(eliminado); // true

//
let producto: [string, number] = ["Laptop", 1200];

console.log(producto.length); // 2

//
let coordenadas: [number, number] = [10, 20];

let nuevasCoord = coordenadas.map((valor) => valor * 2);

console.log(nuevasCoord); // [20, 40]

//Recorrer las tuplas
let usuario2: [string, number] = ["Laura", 28];

usuario2.forEach((valor) => {
  console.log(valor);
});

//Metodos no permitidos
let numeros: [number, number] = [1, 2];

numeros.sort(); // Error si se usa con elementos no comparables
numeros.reverse(); // Error si rompe la estructura esperada
