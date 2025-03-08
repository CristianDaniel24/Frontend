let personas = [{ nombre: "Juan" }, { nombre: "Ana" }, { nombre: "Carlos" }];

console.log(personas.indexOf({ nombre: "Ana" }));

let personaEncontrada = personas.find((persona) => persona.nombre === "Ana");

console.log(personaEncontrada);

console.log();
let usuarios = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Pedro" },
];

let usuario = usuarios.find((u) => u.id === 2);
console.log(usuario);

console.log();
let indice = usuarios.findIndex((u) => u.id === 3);
console.log(indice);

console.log();
let personas2 = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 20 },
  { nombre: "Pedro", edad: 35 },
];

let mayores = personas2.filter((p) => p.edad > 25);
console.log(mayores);
