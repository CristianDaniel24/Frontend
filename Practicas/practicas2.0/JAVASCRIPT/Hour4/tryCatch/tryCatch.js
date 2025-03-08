try {
  console.log(nombre); //Error: el nombre no esta definido
} catch (error) {
  console.error("Se produjo un error:", error.message);
}

console.log();
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log(dividir(10, 0)); // Error: No se puede dividir por cero
console.log(dividir(10, 2));

console.log();
try {
  let resultado = 10 / 2;
  console.log("Resultado:", resultado);
} catch (error) {
  console.log("Ocurrio un error:", error.message);
} finally {
  console.log("Este codigo se ejecuta siempre");
}
