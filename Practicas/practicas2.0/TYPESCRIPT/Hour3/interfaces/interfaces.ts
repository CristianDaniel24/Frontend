interface Persona {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
};

console.log(persona1.nombre); // "Juan"
console.log(persona1.edad); // 30

interface Persona2 {
  nombre: string;
  edad2?: number; // Opcional
}

let persona2: Persona2 = { nombre: "Ana" }; // Correcto (edad es opcional)
let persona3: Persona2 = { nombre: "Luis", edad2: 25 }; // Correcto

interface Auto {
  readonly marca: string;
  modelo: string;
}

let auto1: Auto = { marca: "Toyota", modelo: "Corolla" };
auto1.modelo = "Camry"; // Permitido
//auto1.marca = "Honda"; // Error: `marca` es de solo lectura

interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
}

const miCalculadora: Calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
};

console.log(miCalculadora.sumar(5, 3)); // 8
console.log(miCalculadora.restar(10, 4)); // 6
