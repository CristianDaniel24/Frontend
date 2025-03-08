let nombre = "Juan";
let edad = 30;

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);

console.log();
console.log(`El resultado de 10 + 5 es: ${10 + 5}`);

function obtenerEdad() {
  return 25;
}

console.log();
console.log(`Mi edad es ${obtenerEdad()}`);

console.log();
let mensaje = `Hola,
Soy un mensaje
en varias lineas`;
console.log(mensaje);

console.log();

let titulo = "Bienvenido";
let contenido = "Gracias por visitar nuestra página.";

let html = `
    <div>
        <h1>${titulo}</h1>
        <p>${contenido}</p>
    </div>
`;

console.log(html);

console.log();
const usuario = {
  nombre: "Ana",
  edad: 27,
  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  },
};

console.log(usuario.presentarse());

console.log();

let nombre2 = "Pedro";
let mensaje2 = `Hola ${nombre2}, tu mensaje es: "${`Bienvenido a nuestra plataforma`}"`;

console.log(mensaje2);
