//Edad es simplemente un alias para number, lo que facilita su uso en el codigo
type Edad = number;

let edadUsuario: Edad = 25; // ✅ Funciona porque Edad es un number

type Nombre = string;
type Activo = boolean;
type Precio = number;

//
let usuario: Nombre = "Juan";
let estaActivo: Activo = true;
let costoProducto: Precio = 99.99;

//
type Coordenadas = [number, number];

let punto: Coordenadas = [10, 20];

//
type Resultado = number | string;

let respuesta1: Resultado = 100;
let respuesta2: Resultado = "Aprobado";
