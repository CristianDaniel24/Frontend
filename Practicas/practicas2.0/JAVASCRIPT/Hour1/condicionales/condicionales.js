let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let age = 40;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(mensaje);

let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miércoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("No es ningun dia o es un dia diferente");
}
