"use client";

import React, { useState } from "react";

const GreetingComponent = () => {
  const [name, setName] = useState(""); // Estado para almacenar el nombre

  //le dice a TypeScript que el evento viene de un <input>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Ahora TypeScript sabe que e es un evento de input
  };

  const handleClear = () => {
    setName(""); // Limpia el input
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Saluda al mundo!
        </h1>

        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <p className="text-lg text-gray-700 mb-4">
          {name ? `Hola, ${name}!` : "Escribe tu nombre arriba"}
        </p>

        <button
          onClick={handleClear}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default GreetingComponent;
