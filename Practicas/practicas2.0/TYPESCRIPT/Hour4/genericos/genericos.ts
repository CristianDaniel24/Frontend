function retornarElemento(elemento: any): any {
  return elemento;
}

let resultado = retornarElemento("Hola");
console.log(resultado.toUpperCase()); // Funciona

resultado = retornarElemento(42);
console.log(resultado.toUpperCase()); // Error en tiempo de ejecución

//
function retornarElemento2<T>(elemento: T): T {
  return elemento;
}

let texto = retornarElemento2<string>("Hola");
console.log(texto.toUpperCase()); // Funciona

let numero = retornarElemento2<number>(42);
// console.log(numero.toUpperCase()); // TypeScript da error en tiempo de compilación

//
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola TypeScript")); // "Hola TypeScript"
console.log(identidad<number>(100)); // 100

//
class Caja<T> {
  private contenido: T;

  constructor(valor: T) {
    this.contenido = valor;
  }

  obtenerContenido(): T {
    return this.contenido;
  }
}

const cajaString = new Caja<string>("Hola");
console.log(cajaString.obtenerContenido()); // "Hola"

const cajaNumero = new Caja<number>(42);
console.log(cajaNumero.obtenerContenido()); // 42
