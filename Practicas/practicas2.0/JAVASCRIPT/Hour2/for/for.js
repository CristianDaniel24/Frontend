for (let i = 1; i <= 5; i++) {
  console.log("Iteracion numero: " + i);
}
console.log();
let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + frutas[i]);
}

console.log();
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log();
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Salta la iteracion cuando i = 3
  }
  console.log("Numero: " + i);
}

console.log();
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Rompe el ciclo cuando i = 3
  }
  console.log("Numero: " + i);
}

console.log();
let colores = ["Rojo", "Verde", "Azul"];
for (let color of colores) {
  console.log(color);
}

console.log();
let persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

console.log();
colores.forEach((color) => console.log(color));
