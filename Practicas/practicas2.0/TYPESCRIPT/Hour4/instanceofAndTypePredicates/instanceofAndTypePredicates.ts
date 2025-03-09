//instanceof y type predicates se utilizan para Type Narrowing,
// esto reduce un tipo generico (any, unknown, union type) a un tipo mas especifico en tiempo de ejecucion
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

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    return animal.ladrar(); // Se reconoce como Perro
  } else {
    return animal.maullar(); // Se reconoce como Gato
  }
}

const dog = new Perro();
const cat = new Gato();

console.log(hacerSonido(dog)); // "Guau!"
console.log(hacerSonido(cat)); // "Miau!"

//
class Persona {
  constructor(public nombre: string) {}
}

class Empleado extends Persona {
  constructor(nombre: string, public puesto: string) {
    super(nombre);
  }
}

function obtenerInformacion(persona: Persona) {
  if (persona instanceof Empleado) {
    console.log(
      `${persona.nombre} es un empleado y trabaja como ${persona.puesto}`
    );
  } else {
    console.log(`${persona.nombre} es solo una persona.`);
  }
}

const p1 = new Persona("Juan");
const p2 = new Empleado("Ana", "Ingeniera");

obtenerInformacion(p1); // "Juan es solo una persona"
obtenerInformacion(p2); // "Ana es un empleado y trabaja como Ingeniera"

//
// Type Predicates
type Coche = { ruedas: number; velocidadMaxima: number };
type Barco = { motores: number; capacidad: number };

function esCoche(vehiculo: Coche | Barco): vehiculo is Coche {
  return "ruedas" in vehiculo;
}

function describirVehiculo(vehiculo: Coche | Barco) {
  if (esCoche(vehiculo)) {
    console.log(`Es un coche con ${vehiculo.ruedas} ruedas.`);
  } else {
    console.log(`Es un barco con ${vehiculo.motores} motores.`);
  }
}

describirVehiculo({ ruedas: 4, velocidadMaxima: 200 }); // "Es un coche con 4 ruedas."
describirVehiculo({ motores: 2, capacidad: 50 }); // "Es un barco con 2 motores."

//
class Perro2 {
  ladrar() {
    return "Guau!";
  }
}

class Gato2 {
  maullar() {
    return "Miau!";
  }
}

function esPerro(animal: Perro2 | Gato2): animal is Perro2 {
  return animal instanceof Perro2;
}

function hacerSonido2(animal: Perro2 | Gato2) {
  if (esPerro(animal)) {
    return animal.ladrar();
  } else {
    return animal.maullar();
  }
}

console.log(hacerSonido2(new Perro2())); // "Guau!"
console.log(hacerSonido2(new Gato2())); // "Miau!"
