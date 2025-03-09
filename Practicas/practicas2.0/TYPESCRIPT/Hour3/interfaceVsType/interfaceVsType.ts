//Las interfaces permiten heredar propiedades usando extends
interface Animal {
  nombre: string;
}

interface Perro extends Animal {
  raza: string;
}

const miPerro: Perro = {
  nombre: "Max",
  raza: "Labrador",
};

// Con type se usa & para lograr lo mismo
type Animal2 = { nombre: string };
type Perro2 = Animal2 & { raza: string };

const miPerro2: Perro2 = {
  nombre: "Max",
  raza: "Labrador",
};

// Si definimos una interface con el mismo nombre varias veces se combinan automaticamente
interface Usuario {
  nombre: string;
}

interface Usuario {
  edad: number;
}

const persona: Usuario = { nombre: "Pedro", edad: 35 }; // Funciona

// Esto no funciona con type porque no se pueden redefinir
//type Usuario2 = { nombre: string };
//type Usuario2 = { edad: number };  // Error: Duplicate identifier Usuario
