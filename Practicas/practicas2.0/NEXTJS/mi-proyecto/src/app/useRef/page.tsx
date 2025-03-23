"use client";

import { useRef, useState } from "react";

export default function ClickCounter() {
  const clickRef = useRef<number>(0); // Guarda clics sin renderizar
  const [renderCount, setRenderCount] = useState<number>(0); // Forzar render

  const handleClick = () => {
    clickRef.current += 1;
    alert(`Has hecho ${clickRef.current} clic(s)`);
  };

  const forceRender = () => {
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center text-gray-700">
        Contador de Clics (useRef)
      </h1>

      <button
        onClick={handleClick}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Hacer clic (no renderiza)
      </button>

      <button
        onClick={forceRender}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Forzar re-render
      </button>

      <p className="text-center text-gray-600">Render actual: {renderCount}</p>
    </div>
  );
}
