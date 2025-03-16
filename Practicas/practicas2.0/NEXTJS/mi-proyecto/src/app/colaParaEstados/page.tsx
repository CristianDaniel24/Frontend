"use client";
import { useState } from "react";

export default function StateQueueExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    //Se intenta incrementar varia veces de forma incorrecta
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    //Forma correcta se usa la version con callback para asegurar el valor actualizado
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center transition-all">
        <h1 className="text-3xl font-bold">Estado en cola</h1>
        <p className="mt-3 text-4xl font-bold text-blue-600">{count}</p>

        <button
          onClick={handleIncrement}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Incrementar +4
        </button>
      </div>
    </div>
  );
}
