type Coche = { ruedas: number; velocidadMaxima: number };
type Barco = { motores: number; capacidad: number };

function describirVehiculo(vehiculo: Coche | Barco) {
  if ("ruedas" in vehiculo) {
    console.log(`Es un coche con ${vehiculo.ruedas} ruedas.`);
  } else {
    console.log(`Es un barco con ${vehiculo.motores} motores.`);
  }
}

describirVehiculo({ ruedas: 4, velocidadMaxima: 200 }); // "Es un coche con 4 ruedas."
describirVehiculo({ motores: 2, capacidad: 50 }); // "Es un barco con 2 motores."

//
type Programador = { lenguaje: string; experiencia: number };
type Disenador = { herramienta: string; proyectos: number };

function describirPersona(persona: Programador | Disenador) {
  if ("lenguaje" in persona) {
    console.log(`Es un programador con experiencia en ${persona.lenguaje}.`);
  } else {
    console.log(`Es un diseñador experto en ${persona.herramienta}.`);
  }
}

describirPersona({ lenguaje: "TypeScript", experiencia: 5 }); // "Es un programador con experiencia en TypeScript."
describirPersona({ herramienta: "Figma", proyectos: 10 }); // "Es un diseñador experto en Figma."

//
type Admin = { permisos: string[] };
type Usuario = { email: string };

function gestionarAcceso(persona: Admin | Usuario) {
  if ("permisos" in persona) {
    console.log(`Admin con permisos: ${persona.permisos.join(", ")}`);
  } else {
    console.log(`Usuario con email: ${persona.email}`);
  }
}

gestionarAcceso({ permisos: ["editar", "eliminar"] }); // "Admin con permisos: editar, eliminar"
gestionarAcceso({ email: "user@example.com" }); // "Usuario con email: user@example.com"

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

function hacerSonido(animal: Perro | Gato) {
  if ("ladrar" in animal) {
    return animal.ladrar();
  } else {
    return animal.maullar();
  }
}

const dog = new Perro();
const cat = new Gato();

console.log(hacerSonido(dog)); // "Guau!"
console.log(hacerSonido(cat)); // "Miau!"
