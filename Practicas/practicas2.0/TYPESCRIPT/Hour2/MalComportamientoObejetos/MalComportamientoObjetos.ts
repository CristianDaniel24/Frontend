const usuario1 = { nombre: "Juan", edad: 30 };
const usuario2 = usuario1; // usuario2 NO es una copia, es la misma referencia

usuario2.edad = 40; // Cambiamos usuario2, pero afecta usuario1 también

console.log(usuario1); // Error: { nombre: "Juan", edad: 40 }  (se modificó usuario1)
console.log(usuario2); // { nombre: "Juan", edad: 40 }

const usuario3 = { nombre: "Juan", edad: 30 };
const usuario4 = { ...usuario3 }; // Esto crea una copia independiente

usuario4.edad = 40;

console.log(usuario3); // { nombre: "Juan", edad: 30 }  (no se modifica)
console.log(usuario4); // { nombre: "Juan", edad: 40 }

console.log();
const listaUsuarios = [{ nombre: "Carlos", edad: 25 }];
const usuarioRef = listaUsuarios[0]; // Referencia al objeto original

usuarioRef.edad = 30;

console.log(listaUsuarios); // [{ nombre: "Carlos", edad: 30 }] (se modifico)
