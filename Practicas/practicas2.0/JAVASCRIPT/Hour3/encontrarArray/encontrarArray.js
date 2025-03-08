let numeros = [10, 20, 30, 40];
let indice = numeros.indexOf(30);
console.log(indice);

let numeros2 = [10, 20, 30, 20, 40];
/*Si un elemento aparece mas de una vez, lastIndexOf() devuelve la ultima posicion.*/
console.log(numeros2.lastIndexOf(20));

console.log();
let nombres = ["Carlos", "Ana", "Pedro"];
console.log(nombres.includes("Ana"));
console.log(nombres.includes("Juan"));

console.log();
let numeros3 = [10, 15, 20, 25];
let encontrado = numeros3.find((num) => num > 15);
console.log(encontrado);

console.log();
let numeros4 = [10, 15, 20, 25];
let indice2 = numeros4.findIndex((num) => num > 15);
console.log(indice2);
