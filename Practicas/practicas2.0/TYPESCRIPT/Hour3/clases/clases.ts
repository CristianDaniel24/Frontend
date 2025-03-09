class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): string {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona1 = new Persona("Carlos", 30);
console.log(persona1.presentarse());

//
class CuentaBancaria {
  public titular: string; // Accesible en cualquier parte
  private saldo: number; // Solo accesible dentro de la clase

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  public depositar(monto: number): void {
    this.saldo += monto;
  }

  public obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria("Ana", 1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500

//
class Vehiculo {
  readonly marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }
}

const auto = new Vehiculo("Toyota");
// auto.marca = "Honda"; // Error: No se puede modificar porque es readonly

//
class Usuario {
  //Podemos ahorrar codigo declarando las propiedades directamente en el constructor con public, private, o protected
  constructor(public nombre: string, private clave: string) {}

  mostrarNombre(): string {
    return this.nombre;
  }
}

const user = new Usuario("Pedro", "secreta");
console.log(user.mostrarNombre()); // Pedro

//

class Animal {
  constructor(public nombre: string) {}

  hacerSonido(): string {
    return "Hace un sonido";
  }
}

class Perro extends Animal {
  ladrar(): string {
    return `${this.nombre} dice: Guau!`;
  }
}

const miPerro = new Perro("Firulais");
console.log(miPerro.hacerSonido()); // Hace un sonido
console.log(miPerro.ladrar()); // Firulais dice: Guau!

//
class Matematicas {
  static PI: number = 3.1416;

  static calcularAreaCirculo(radio: number): number {
    return this.PI * radio * radio;
  }
}

console.log(Matematicas.PI); // 3.1416
// No es necesario instanciar la clase para usar metodos estaticos
console.log(Matematicas.calcularAreaCirculo(5)); // 78.543

//
class Cuenta {
  private _saldo: number = 0;

  get saldo(): number {
    return this._saldo;
  }

  set saldo(nuevoSaldo: number) {
    if (nuevoSaldo < 0) {
      throw new Error("El saldo no puede ser negativo.");
    }
    this._saldo = nuevoSaldo;
  }
}

const cuenta2 = new Cuenta();
cuenta2.saldo = 1000; // Se usa el setter
console.log(cuenta2.saldo); // 1000
// cuenta.saldo = -50; // Error: No puede ser negativo
