let numeros = [1, 2, 3, 4, 5];

let multiplicados = numeros.map((num) => num * 2);

console.log(multiplicados);

console.log();
let numeros2 = [10, 20, 30];

let strings = numeros2.map((num) => num.toString());

console.log(strings);

console.log();
let productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teclado", precio: 40 },
  { nombre: "Mouse", precio: 20 },
];

let productosConIVA = productos.map((producto) => ({
  nombre: producto.nombre,
  precio: producto.precio * 1.21,
}));

console.log(productosConIVA);
