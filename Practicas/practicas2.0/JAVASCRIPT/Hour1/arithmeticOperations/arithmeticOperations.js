/* -, +, *, /, %, */

console.log(5 + 3);
console.log(10 - 7);
console.log(4 * 2);
console.log(9 / 3);
console.log(10 % 3);
console.log(2 ** 4); // 16 (2 elevado a la 4)

console.log(10 + 2 * 5); // 20 (Multiplica primero, luego suma)
console.log((10 + 2) * 5); // 60 (Los paréntesis cambian el orden)
console.log(2 ** 3 * 4); // 32 (Exponente primero, luego multiplicación)

let a = 5;
console.log(a++); //(Primero devuelve el valor, luego incrementa)
console.log(a); // 6

let b = 5;
console.log(++b); //(Primero incrementa, luego devuelve el valor)

let c = +5;
console.log(c);

c -= 1;
console.log(c);
