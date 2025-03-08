let frutas = ["Manzana", "Pera", "Banana", "Uva"];

frutas.sort();

console.log(frutas);
// ["Banana", "Manzana", "Pera", "Uva"]

console.log();
let numeros = [100, 2, 50, 10, 5];

// .sort() convierte los numeros a strings antes de compararlos, lo que no da el resultado esperado
numeros.sort();

console.log(numeros);

numeros.sort((a, b) => a - b);

console.log(numeros);

console.log();
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 20 },
];

// Ordenar por edad (ascendente)
personas.sort((a, b) => a.edad - b.edad);

console.log(personas);

console.log();
let numeros2 = [1, 2, 3, 4, 5];

numeros2.reverse();

console.log(numeros2);
