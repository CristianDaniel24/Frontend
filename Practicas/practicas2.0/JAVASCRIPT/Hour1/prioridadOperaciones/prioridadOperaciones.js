console.log((5 + 3) * 2); // 16
console.log(5 + 3 * 2); // 11 (porque `*` tiene prioridad sobre `+`)

let x = 5;
console.log(++x); // 6 (incrementa antes de imprimir)
console.log(x++); // 6 (imprime antes de incrementar)
console.log(x); // 7 (incremento aplicado después)

console.log(2 ** 3 * 2); // 16 (Primero `2 ** 3 = 8`, luego `8 * 2`)
console.log(2 * 3 ** 2); // 18 (Primero `3 ** 2 = 9`, luego `2 * 9`)

console.log((10 / 2) * 3); // 15 (Primero `10 / 2 = 5`, luego `5 * 3`)
console.log((10 % 3) * 2); // 2  (Primero `10 % 3 = 1`, luego `1 * 2`)
