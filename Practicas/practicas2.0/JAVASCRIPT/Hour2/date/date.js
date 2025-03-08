let fechaActual = new Date();
console.log(fechaActual);

console.log();
let fechaEspecifica = new Date(2024, 7, 12); // Año, Mes (0-index), Dia
console.log(fechaEspecifica);

console.log();
//Formato: (año, mes, día, horas, minutos, segundos, milisegundos)
let fechaConHora = new Date(2024, 7, 12, 14, 30, 0);
console.log(fechaConHora);
// Salida: "Mon Aug 12 2024 14:30:00 GMT+0000 (UTC)"

console.log();
let fecha = new Date();
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getDay());

console.log();

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

fecha.setHours(10);
fecha.setMinutes(45);
fecha.setSeconds(30);
console.log(fecha);

console.log();
let fecha1 = new Date("2024-08-12");
let fecha2 = new Date("2025-03-06");

if (fecha1.getTime() < fecha2.getTime()) {
  console.log("fecha1 es anterior a fecha2");
} else {
  console.log("fecha2 es anterior a fecha1");
}
