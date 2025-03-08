let numeros = [1, 2, 3, 4, 5];

numeros.length = 0; //Vacia el array

console.log(numeros);

console.log();
let numeros2 = [1, 2, 3, 4, 5];

numeros2.splice(0, numeros2.length); // Borra todo el contenido

console.log(numeros2);

console.log();
let numeros3 = [1, 2, 3, 4, 5];

numeros3 = []; // Reasignar un nuevo array

console.log(numeros3); // []
