function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Crear objetos usando la función constructora
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1);
console.log(persona2);

console.log();
persona1.nacionalidad = "Mexicana";
console.log(persona1.nacionalidad);

console.log();
function Persona2(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  };
}

const persona3 = new Persona2("Pedro", 40);
console.log(persona3.saludar());

/*//////////////*/
console.log();
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.propietario = {
    nombre: "Desconocido",
    edad: 0,
  };
}

const miCoche = new Coche("Toyota", "Corolla", 2022);
miCoche.propietario.nombre = "Carlos";
miCoche.propietario.edad = 32;

console.log(miCoche);
