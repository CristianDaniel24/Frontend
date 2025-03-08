let a = 10;
let b = a; // Se copia el valor de a en b

b = 20; // Solo cambia b, no a

console.log(a);
console.log(b);

console.log();
let obj1 = { nombre: "Juan" };
let obj2 = obj1; // obj2 almacena la referencia a obj1

obj2.nombre = "Pedro"; // Se modifica el objeto referenciado

console.log(obj1.nombre);
console.log(obj2.nombre);
