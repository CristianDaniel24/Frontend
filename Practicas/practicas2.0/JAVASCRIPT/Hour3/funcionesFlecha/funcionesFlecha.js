/*function sumar(a, b) {
  return a + b;
}
*/

/*Funcion de flecha equivalente*/
const sumar = (a, b) => a + b;

console.log(sumar(3, 5));

console.log();
const cuadrado = (num) => num * num;

console.log(cuadrado(4));

console.log();
const multiplicar = (a, b) => {
  let resultado = a * b;
  return resultado;
};

console.log(multiplicar(3, 5));

console.log();
const saludar = () => "Hola, mundo!";

console.log(saludar());

console.log();
const persona = {
  nombre: "Ana",
  saludar: () => console.log("Hola, soy " + this.nombre),
};

persona.saludar();
