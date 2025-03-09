type Usuario = {
  readonly nombre: string;
};

let usuario: Usuario = { nombre: "Carlos" };
//usuario.nombre = "Pedro"; // ❌ Error: la propiedad es de solo lectura

class Persona {
  readonly dni: string;

  constructor(dni: string) {
    this.dni = dni; // ✅ Se puede asignar en el constructor
  }

  cambiarDNI() {
    //this.dni = "12345678"; // Error: No se puede modificar después de la inicialización
  }
}

const persona = new Persona("98765432");
//persona.dni = "12345678"; // Error: Propiedad de solo lectura

//Propiedades Opcionales
type Usuario2 = {
  nombre: string;
  edad: number;
};

//let usuario2: Usuario2 = { nombre: "Ana" }; // Error: Falta la propiedad edad

function saludar(nombre: string, edad?: number) {
  if (edad !== undefined) {
    console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
  } else {
    console.log(`Hola, soy ${nombre}.`);
  }
}

saludar("Juan"); // Hola, soy Juan
saludar("Ana", 25); // Hola, soy Ana y tengo 25 años

type Usuario3 = {
  readonly id: number;
  nombre: string;
  edad?: number;
};

let usuario4: Usuario3 = { id: 1, nombre: "Pedro" };
//usuario4.id = 2; // Error: id es readonly
usuario4.edad = 30; // Correcto: edad es opcional
