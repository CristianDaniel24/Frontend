class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Crear una instancia de la clase
const persona1 = new Persona("Juan", 30);
console.log(persona1);

console.log();
class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2022);
console.log(miCoche);

console.log();
class Persona2 {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

const persona2 = new Persona2("Carlos", 40);
console.log(persona2.nombre);

persona2.nombre = "Luis";
console.log(persona2.nombre);

console.log();
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sonido() {
    return "Hace un sonido";
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase padre
    this.raza = raza;
  }

  sonido() {
    return "Ladra";
  }
}

const perro1 = new Perro("Max", "Labrador");
console.log(perro1.nombre);
console.log(perro1.sonido());
