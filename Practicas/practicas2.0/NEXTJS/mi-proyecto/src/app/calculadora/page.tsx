"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState(""); // Estado para almacenar la expresión

  // Función para manejar la entrada de números y operadores
  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };

  // Función para calcular el resultado
  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Evalúa la expresión (⚠️ eval tiene riesgos, úsalo con cuidado)
    } catch {
      setInput("0");
    }
  };

  // Función para limpiar la pantalla
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          🧮 Calculadora
        </h1>

        {/* Pantalla de la calculadora */}
        <div className="bg-gray-100 p-4 rounded-lg text-right text-2xl font-mono h-16 flex items-center justify-end">
          {input || "0"}
        </div>

        {/* Botones de la calculadora */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              onClick={() => handleInput(item)}
              className="btn"
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleInput(item)}
              className="btn"
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleInput(item)}
              className="btn"
            >
              {item}
            </button>
          ))}
          {["0", ".", "+", "="].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "=" ? calculateResult() : handleInput(item)
              }
              className="btn"
            >
              {item}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-bold"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

// Estilos en Tailwind aplicados con la clase "btn"
const btnStyle = `
  bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-lg font-bold text-lg
`;
