let frutas = ["Manzana", "Pera", "Uva"];

let resultado = frutas.join();

console.log(resultado); // Manzana,Pera,Uva

console.log();
let palabras = ["Hola", "mundo", "JavaScript"];

console.log(palabras.join(" ")); // Hola mundo JavaScript
console.log(palabras.join("-")); // Hola-mundo-JavaScript
console.log(palabras.join(" 🤖 ")); // Hola 🤖 mundo 🤖 JavaScript

console.log();
let mensaje = ["Aprender", "JavaScript", "es", "divertido"];

console.log(mensaje.join(" ") + "."); // Aprender JavaScript es divertido

console.log();
//Si el array esta vacío, join() devuelve un string vacio
let vacio = [];

console.log(vacio.join("-")); // ""
