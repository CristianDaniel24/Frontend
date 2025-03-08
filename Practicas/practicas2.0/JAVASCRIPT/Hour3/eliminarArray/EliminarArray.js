const numeros = [10, 20, 30, 40];

const eliminado = numeros.pop(); // Elimina el 40
console.log(numeros);
console.log(eliminado);

console.log();
const nombres = ["Ana", "Luis", "Carlos"];

const eliminado2 = nombres.shift(); // Elimina Ana
console.log(nombres);
console.log(eliminado2);

console.log();
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

colores.splice(1, 1);

console.log(colores);

console.log();
const frutas = ["Manzana", "Banana", "Pera", "Uva", "Melón"];

console.log();
// Elimina 2 elementos desde la posicion 1 (Banana y Pera)
frutas.splice(1, 2);

console.log(frutas);
