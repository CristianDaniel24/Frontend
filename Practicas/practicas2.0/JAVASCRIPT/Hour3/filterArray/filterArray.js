let numeros = [5, 12, 8, 20, 3, 15];

let mayoresA10 = numeros.filter((num) => num > 10);

console.log(mayoresA10);

console.log();
let palabras = ["manzana", "sol", "elefante", "luz", "montaña"];

let palabrasLargas = palabras.filter((palabra) => palabra.length > 5);

console.log(palabrasLargas);

console.log();
let productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teclado", precio: 40 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Monitor", precio: 150 },
];

let productosCaros = productos.filter((producto) => producto.precio > 50);

console.log(productosCaros);
