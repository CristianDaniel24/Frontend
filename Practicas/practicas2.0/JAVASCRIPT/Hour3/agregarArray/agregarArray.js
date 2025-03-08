let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);

let letras = ["a", "b"];
letras.push("c", "d", "e");
console.log(letras);

console.log();
let frutas = ["Manzana", "Banana"];
frutas.unshift("Uva", "Naranja");
console.log(frutas);

console.log();
let colores = ["Rojo", "Azul", "Verde"];
/*Sintaxsis: splice(posición, elementos_a_eliminar, nuevo_elemento)*/
colores.splice(1, 2, "Amarillo");
console.log(colores);

console.log();
let numeros2 = [10, 20, 40];
numeros2.splice(2, 0, 30, 35);
console.log(numeros2);
