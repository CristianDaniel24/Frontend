"use client";
import { useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para manejar el modo oscuro

  // Función para cambiar el modo con confirmación al desactivar
  const toggleMode = () => {
    if (isDarkMode) {
      const confirmChange = window.confirm(
        "¿Seguro que quieres desactivar el modo oscuro?"
      );
      if (!confirmChange) return; // Si el usuario cancela, no cambia el estado
    }
    setIsDarkMode(!isDarkMode); // Cambia el estado
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="p-6 rounded-lg shadow-xl bg-white dark:bg-gray-800 transition-all w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {isDarkMode ? "🌙 Modo Oscuro Activado" : "☀️ Modo Claro Activado"}
        </h1>

        <button
          onClick={toggleMode}
          className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all shadow-md ${
            isDarkMode
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isDarkMode ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
        </button>
      </div>
    </div>
  );
}
