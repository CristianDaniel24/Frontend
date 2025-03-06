let i = 1;

while (i <= 5) {
  console.log("Iteracion numero: " + i);
  i++;
}

let numero = Math.floor(Math.random() * 10) + 1; // Numero aleatorio entre 1 y 10
let intento = 0;

while (numero !== 7) {
  console.log("Numero generado: " + numero);
  numero = Math.floor(Math.random() * 10) + 1; // Se genera otro numero
  intento++;
}

console.log("¡Se genero un 7 despues de " + intento + " intentos!");

console.log();
let j = 1;
while (true) {
  console.log("Iteracion: " + j);
  if (j === 3) {
    console.log("Deteniendo el bucle en 3");
    break;
  }
  j++;
}

console.log();
let k = 0;
while (k < 5) {
  k++;
  if (k === 3) {
    console.log("Saltando la iteracion 3...");
    continue;
  }
  console.log("Numero: " + k);
}

console.log();
let d = 6;
do {
  console.log("Numero: " + d);
  d++;
} while (d <= 5);
