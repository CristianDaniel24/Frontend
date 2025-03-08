let persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log();
console.log(persona["nombre"]);
console.log(persona["edad"]);

console.log();
persona.edad = 31;
console.log(persona.edad);

console.log();
persona.profesion = "Ingeniero";
console.log(persona.profesion);

console.log();
delete persona.ciudad;
console.log(persona.ciudad);

console.log();
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

console.log();
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar: function () {
    console.log("El coche ha arrancado");
  },
};

coche.arrancar();
