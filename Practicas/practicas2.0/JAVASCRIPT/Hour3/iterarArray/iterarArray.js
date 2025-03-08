let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Indice ${i}: ${numeros[i]}`);
}

console.log();
let frutas = ["Manzana", "Pera", "Uva"];

frutas.forEach(function (fruta, indice) {
  console.log(`Fruta ${indice}: ${fruta}`);
});

console.log();
let colores = ["Rojo", "Verde", "Azul"];

for (let color of colores) {
  console.log(color);
}
