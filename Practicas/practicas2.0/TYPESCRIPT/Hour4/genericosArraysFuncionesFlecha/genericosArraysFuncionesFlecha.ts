function obtenerElementos<T>(elementos: T[]): T[] {
  return elementos;
}

let numeros = obtenerElementos<number>([1, 2, 3, 4, 5]);
let palabras = obtenerElementos<string>(["Hola", "Mundo"]);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(palabras); // ["Hola", "Mundo"]

function obtenerElementos2<T>(elementos: Array<T>): Array<T> {
  return elementos;
}

//
interface Producto {
  id: number;
  nombre: string;
}

function filtrarProductos<T extends Producto>(
  productos: T[],
  id: number
): T | undefined {
  return productos.find((producto) => producto.id === id);
}

const productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Teclado" },
];

console.log(filtrarProductos(productos, 1)); // { id: 1, nombre: "Laptop" }
console.log(filtrarProductos(productos, 3)); // undefined

//
const duplicar = <T>(valor: T): T[] => [valor, valor];

console.log(duplicar<string>("Hola")); // ["Hola", "Hola"]
console.log(duplicar<number>(10)); // [10, 10]

//
const obtenerLongitud = <T extends { length: number }>(elemento: T): number => {
  return elemento.length;
};

console.log(obtenerLongitud("Hola")); // 4
console.log(obtenerLongitud([1, 2, 3])); // 3
// console.log(obtenerLongitud(100));  // Error: number no tiene "length"

//
const combinar = <T, U>(a: T, b: U): [T, U] => {
  return [a, b];
};

console.log(combinar<string, number>("Hola", 42)); // ["Hola", 42]
console.log(combinar<boolean, string>(true, "Sí")); // [true, "Sí"]
