"use client";

import { useState } from "react";

export default function CounterSnapshot() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState<number | null>(null);

  // Funcion para incrementar el contador
  const increment = () => {
    setPreviousCount(count); // Se guarda la instantanea del estado actual antes de cambiarlo
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center transition-all">
        <h1 className="text-3xl font-bold">📸 Contador</h1>

        {/* Instantanea del estado anterior */}
        {previousCount !== null && (
          <p className="mt-3 text-gray-500 text-sm">
            Estado anterior:{" "}
            <span className="font-semibold">{previousCount}</span>
          </p>
        )}

        {/* Estado actual */}
        <p className="mt-3 text-4xl font-bold text-blue-600">{count}</p>

        {/* Boton de Incrementar */}
        <button
          onClick={increment}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}
