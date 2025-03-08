let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];

console.log(array2);

console.log();
let original = [1, 2, 3];
let copia = [...original];

copia.push(4);

console.log(original); // [1, 2, 3] (se mantiene igual)
console.log(copia); // [1, 2, 3, 4] (es una copia independiente)
