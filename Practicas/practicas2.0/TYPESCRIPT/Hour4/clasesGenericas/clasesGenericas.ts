class MiClase<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  obtenerValor(): T {
    return this.valor;
  }
}

// Uso con diferentes tipos:
const instanciaString = new MiClase<string>("Hola");
console.log(instanciaString.obtenerValor()); // "Hola"

const instanciaNumero = new MiClase<number>(42);
console.log(instanciaNumero.obtenerValor()); // 42

//
class Par<T, U> {
  private primero: T;
  private segundo: U;

  constructor(primero: T, segundo: U) {
    this.primero = primero;
    this.segundo = segundo;
  }

  obtenerPar(): [T, U] {
    return [this.primero, this.segundo];
  }
}

// Uso con diferentes tipos:
const par1 = new Par<string, number>("Edad", 30);
console.log(par1.obtenerPar()); // ["Edad", 30]

const par2 = new Par<boolean, string>(true, "Activo");
console.log(par2.obtenerPar()); // [true, "Activo"]

// Clases genericas con metodos genericos
class Utilidades<T> {
  private elementos: T[] = [];

  agregarElemento(elemento: T): void {
    this.elementos.push(elemento);
  }

  obtenerTodos(): T[] {
    return this.elementos;
  }

  static combinar<U>(a: U, b: U): U[] {
    return [a, b];
  }
}

// Uso:
const listaNumeros = new Utilidades<number>();
listaNumeros.agregarElemento(10);
listaNumeros.agregarElemento(20);
console.log(listaNumeros.obtenerTodos()); // [10, 20]

// Metodo estatico con otro tipo:
console.log(Utilidades.combinar<string>("Hola", "Mundo")); // ["Hola", "Mundo"]
