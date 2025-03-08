let texto = "Hola, mundo!";
console.log(texto.length);

let saludo = "hola";
console.log(saludo.toUpperCase());

let saludo2 = "HOLA";
console.log(saludo2.toLowerCase());

console.log();
let mensaje = "   Hola mundo   ";
console.log(mensaje.trim()); //Hola mundo
console.log(mensaje.trimStart()); // "Hola mundo   "
console.log(mensaje.trimEnd()); // "   Hola mundo"

console.log();
let texto2 = "JavaScript";
console.log(texto2.slice(0, 4)); // "Java"
console.log(texto2.slice(4)); // "Script"
console.log(texto2.slice(-6, -1)); // "Scrip"
/*
Extrae caracteres desde la posicion `start` hasta `end` (sin incluir `end`)
Si `end` no se proporciona, extrae hasta el final
Acepta indices negativos (cuenta desde el final)
*/

console.log();
console.log(texto2.substring(0, 4)); // "Java"
console.log(texto2.substring(4)); // "Script"

console.log(texto2.substr(4, 6)); // "Script" (desde indice 4, extrae 6 caracteres)

console.log();
let frase = "Bienvenido a JavaScript";
console.log(frase.startsWith("Bien"));
console.log(frase.startsWith("Java"));

console.log(frase.endsWith("JavaScript"));
console.log(frase.endsWith("Bien"));

console.log();
let mensaje2 = "Me gusta JavaScript";
console.log(mensaje2.replace("JavaScript", "Python")); //Me gusta Python

console.log();
console.log("Hola ".repeat(3)); //Hola Hola Hola

console.log();
let lista = "manzana,pera,platano";
console.log(lista.split(",")); // ["manzana", "pera", "plátano"]

console.log();
let nombre = "Juan";
let apellido = "Perez";
console.log(nombre.concat(" ", apellido));

console.log();
let palabra = "JavaScript";
console.log(palabra.charAt(2)); //v
