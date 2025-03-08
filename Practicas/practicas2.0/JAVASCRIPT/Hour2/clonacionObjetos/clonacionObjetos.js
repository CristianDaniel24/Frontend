const original = { nombre: "Juan", edad: 30 };
const copia = original; // NO es una copia real, es una referencia

copia.nombre = "Pedro"; // Modifica tambien el original

console.log(original.nombre);
console.log(copia.nombre);

console.log();
const original2 = { nombre: "Juan", edad: 30 };
const copia2 = { ...original2 };

copia2.nombre = "Pedro"; // No afecta al original

console.log(original2.nombre);
console.log(copia2.nombre);
