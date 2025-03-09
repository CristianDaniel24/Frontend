let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Luis", "Carlos"];

let numeros2: Array<number> = [10, 20, 30];
let nombres2: Array<string> = ["Ana", "Luis", "Carlos"];

type Usuario = {
  id: number;
  nombre: string;
};

let usuarios: Usuario[] = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];

let valores: (string | number)[] = [1, "Hola", 3, "Mundo"];

let frutas: string[] = ["Manzana", "Banana"];
frutas.push("Naranja"); // Manzana", "Banana", "Naranja
frutas.pop(); // Manzana", "Banana

let numeros3: number[] = [10, 20, 30];
numeros3.forEach((num) => console.log(num * 2)); // 20, 40, 60

let duplicados = numeros.map((num) => num * 2);
console.log(duplicados); // [20, 40, 60]

let mayoresDe20 = numeros.filter((num) => num > 20);
console.log(mayoresDe20); // [30]

let suma = numeros.reduce((total, num) => total + num, 0);
console.log(suma); // 60

//Solo lectura
//Si queremos evitar modificaciones se usa readonly
const colores: readonly string[] = ["Rojo", "Azul"];
//colores.push("Verde"); // Error: `readonly` no permite modificar
