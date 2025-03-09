type Circulo = { tipo: "circulo"; radio: number };
type Rectangulo = { tipo: "rectangulo"; ancho: number; alto: number };
type Triangulo = { tipo: "triangulo"; base: number; altura: number };

type Forma = Circulo | Rectangulo | Triangulo;
//La propiedad tipo es el discriminante
//TypeScript usara esta propiedad para determinar el tipo exacto

//
function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "rectangulo":
      return forma.ancho * forma.alto;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
  }
}

console.log(calcularArea({ tipo: "circulo", radio: 5 })); // 78.54
console.log(calcularArea({ tipo: "rectangulo", ancho: 10, alto: 5 })); // 50
console.log(calcularArea({ tipo: "triangulo", base: 8, altura: 4 })); // 16
//TypeScript usa forma.tipo para inferir que propiedades estan disponibles en cada case
//Evita el uso de if con multiples typeof, haciendo el codigo mas seguro y claro

//Exhaustiveness Checking con never
function calcularAreaSeguro(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "rectangulo":
      return forma.ancho * forma.alto;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
    default:
      const _exhaustivo: never = forma;
      throw new Error(`Tipo de forma no manejado: ${_exhaustivo}`);
  }
}
