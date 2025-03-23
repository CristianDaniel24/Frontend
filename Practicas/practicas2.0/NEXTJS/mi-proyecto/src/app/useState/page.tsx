"use client";

import React, { useState } from "react";

const FormularioNombre: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow">
      <label className="block text-gray-700 mb-2">Tu nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
      />
      <p className="mt-3 text-gray-600">
        Hola, <span className="font-semibold">{nombre}</span>!
      </p>
    </div>
  );
};

export default FormularioNombre;
