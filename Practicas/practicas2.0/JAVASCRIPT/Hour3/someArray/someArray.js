let numeros = [3, 7, 8, 12, 5];

// some verifica si al menos un elemento cumple la condicion
let resultado = numeros.some((num) => num > 10);

console.log(resultado);

console.log();
let nombres = ["Ana", "Carlos", "Luis", "María"];

let tieneNombreLargo = nombres.some((nombre) => nombre.length > 5);

console.log(tieneNombreLargo);

console.log();
let usuarios = [
  { nombre: "Juan", edad: 15 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
];

let hayMayorDeEdad = usuarios.some((usuario) => usuario.edad >= 18);

console.log(hayMayorDeEdad);
