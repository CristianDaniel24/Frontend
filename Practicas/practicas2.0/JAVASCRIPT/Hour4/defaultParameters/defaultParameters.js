function saludar(nombre = "Invitado") {
  console.log(`Hola, ${nombre}!`);
}

saludar("Juan");
saludar();

console.log();
function saludar(nombre) {
  nombre = nombre || "Invitado"; // Si es undefined o falsy, se asigna "Invitado"
  console.log(`Hola, ${nombre}!`);
}

saludar();

console.log();
function presentar(nombre = "Anónimo", edad = 18, ciudad = "Desconocida") {
  console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

presentar("Ana", 25, "Madrid");

presentar("Carlos", 30);

presentar();
