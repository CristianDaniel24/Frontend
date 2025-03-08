let numeros = [6, 8, 9, 12];

// .every() se usa en arrays para verificar si todos los elementos cumplen con una condicion
let resultado = numeros.every((num) => num > 5);

console.log(resultado);

console.log();
let usuarios = [
  { nombre: "Juan", edad: 19 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
];

let todosMayores = usuarios.every((usuario) => usuario.edad >= 18);

console.log(todosMayores);
