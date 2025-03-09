function duplicar(valor: string | number) {
  //TypeScript reduce el tipo usando typeof
  if (typeof valor === "number") {
    return valor * 2; // Aquí sabemos que es un número
  } else {
    return valor.repeat(2); // Aquí sabemos que es un string
  }
}

console.log(duplicar(5)); // 10
console.log(duplicar("Hola")); // "HolaHola"

//
function procesar(valor: string | number | boolean) {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // TypeScript sabe que es un string
  }
  if (typeof valor === "number") {
    return valor.toFixed(2); // TypeScript sabe que es un número
  }
  return valor ? "Verdadero" : "Falso"; // Solo queda boolean
}

console.log(procesar("hola")); // "HOLA"
console.log(procesar(3.1416)); // "3.14"
console.log(procesar(false)); // "Falso"

//
class Perro {
  ladrar() {
    return "Guau!";
  }
}

class Gato {
  maullar() {
    return "Miau!";
  }
}

function sonido(animal: Perro | Gato) {
  //instanceof permite diferenciar instancias de clases
  if (animal instanceof Perro) {
    return animal.ladrar();
  }
  return animal.maullar();
}

const dog = new Perro();
const cat = new Gato();

console.log(sonido(dog)); // "Guau!"
console.log(sonido(cat)); // "Miau!"
