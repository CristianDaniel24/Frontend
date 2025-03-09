// Funcion normal
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(5, 10)); // 15

// Funcion anonima
const restar = function (a: number, b: number): number {
  return a - b;
};

console.log(restar(10, 3)); // 7

// Funcion Flecha
const multiplicar = (a: number, b: number): number => a * b;

console.log(multiplicar(4, 3)); // 12

// Parametros Opcionales
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola, ${nombre} ${apellido}` : `Hola, ${nombre}`;
}

console.log(saludar("Juan")); // "Hola, Juan"
console.log(saludar("Juan", "Pérez")); // "Hola, Juan Pérez"

// Parametros con Valor por Defecto
function saludarConDefault(nombre: string, saludo: string = "Hola"): string {
  return `${saludo}, ${nombre}`;
}

console.log(saludarConDefault("María")); // "Hola, María"
console.log(saludarConDefault("Pedro", "Buenos días")); // "Buenos días, Pedro"

// Parametro Rest ...
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

// Funcion con Retorno Obligatorio
function obtenerEdad(): number {
  return 30;
}

// Funcion que No Retorna Nada
function mostrarMensaje(): void {
  console.log("Este mensaje no retorna nada");
}

// Funcion que Puede Retornar Diferentes Tipos
function obtenerValor(valor: boolean): number | string {
  return valor ? 100 : "Cien";
}

// Tipo de funcion simple
// Operacion solo acepta funciones que reciban 2 numeros y retornen un numero
let operacion: (a: number, b: number) => number;

operacion = (x, y) => x * y;
console.log(operacion(5, 2)); // 10

// Funciones Genericas
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola")); // "Hola"
console.log(identidad<number>(42)); // 42
