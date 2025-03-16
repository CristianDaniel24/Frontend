"use client";

import { useState } from "react";

export default function EventButtons() {
  const [bgColor, setBgColor] = useState("bg-blue-500");
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Eventos de botones con Taildwind
      </h1>
      {/*Boton de alerta*/}
      <button
        className="px-4 py-2 mb-4 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold"
        onClick={() => alert("Hola este es un mensaje de alerta")}
      >
        Mostrar alerta
      </button>
      {/*Boton para cambiar el color de fondo*/}
      <button
        className={`px-4 py-2 mb-4 ${bgColor} hover:bg-opacity-75 rounded-lg text-white font-semibold`}
        onClick={() =>
          setBgColor(bgColor === "bg-blue-500" ? "bg-red-500" : "bg-blue-500")
        }
      >
        Cambiar color
      </button>
      {/* Boton para contar clics */}
      <button
        className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-black font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </button>
    </div>
  );
}
