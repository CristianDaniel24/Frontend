function crearUsuario(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    saludar: function () {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    },
  };
}

const usuario1 = crearUsuario("Juan", 30);
const usuario2 = crearUsuario("Ana", 25);

usuario1.saludar();
usuario2.saludar();
