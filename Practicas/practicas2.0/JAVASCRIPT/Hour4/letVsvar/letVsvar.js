function ejemploVar() {
  if (true) {
    var mensaje = "Hola desde var"; // var es accesible en toda la funcion
  }
  console.log(mensaje); // Funciona porque var ignora el bloque if
}

ejemploVar();

console.log();
function ejemploLet() {
  if (true) {
    let mensaje = "Hola desde let"; // let solo existe en este bloque
    console.log(mensaje);
  }
  // console.log(mensaje);
}

ejemploLet();

console.log();
console.log(nombre); // (existe pero sin valor)
var nombre = "Pedro";
console.log(nombre);

console.log();
// console.log(nombre2); // nombre2 aun no esta inicializado
let nombre2 = "Pedro";
console.log(nombre2);

console.log();
var mensaje = "Hola";
var mensaje = "Adios";
console.log(mensaje);

console.log();

let mensaje2 = "Hola";
//let mensaje2 = "Adios";
console.log(mensaje2);
