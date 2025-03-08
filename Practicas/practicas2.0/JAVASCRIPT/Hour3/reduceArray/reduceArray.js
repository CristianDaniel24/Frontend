let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma);

console.log();
let numeros2 = [1, 2, 3, 4, 5];

let producto = numeros2.reduce((acumulador, num) => acumulador * num, 1);

console.log(producto);

console.log();
let numeros3 = [10, 25, 5, 60, 30];

let maximo = numeros3.reduce((acumulador, num) => Math.max(acumulador, num));

console.log(maximo);

console.log();
let carrito = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 30 },
];

let total = carrito.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);

console.log(total);
