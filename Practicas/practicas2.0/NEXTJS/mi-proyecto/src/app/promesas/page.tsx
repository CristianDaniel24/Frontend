"use client";

import React, { useState } from "react";

const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("¡Datos cargados exitosamente!");
      // reject("Hubo un error"); // Se pueden probar errores activando esta linea
    }, 2000);
  });
};

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("Esperando...");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadData = () => {
    setLoading(true);

    fetchData()
      .then((result: string) => {
        setMessage(result);
      })
      .catch((error: string) => {
        setMessage(`Error: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Promesas con React</h1>

      <button
        onClick={handleLoadData}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        Cargar Datos
      </button>

      {loading && <p className="mt-4 text-blue-500">Cargando...</p>}
      {!loading && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
};

export default App;
