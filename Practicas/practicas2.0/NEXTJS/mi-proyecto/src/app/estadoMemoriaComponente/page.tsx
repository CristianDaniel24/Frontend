"use client";
import { useState } from "react";

export default function MemoryList() {
  const [input, setInput] = useState(""); //Estado para capturar el input del usuario
  const [memories, setMemories] = useState<string[]>([]); //Estado para almacenar la lista de recuerdos

  //Funcion para agregar un nuevo recuerdo
  const addMemory = () => {
    if (input.trim() === "") return; //Evitar agregar recuerdos vacios
    setMemories([...memories, input]); //Agrega el nuevo recuerdo a la lista
    setInput(""); //Limpiar el campo de entrada
  };

  //Funcion para eliminar un recuerdo por indice
  const removeMemory = (index: number) => {
    setMemories(memories.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">Lista de Recuerdos</h1>

        {/* Input y Boton para agregar recuerdos */}
        <div className="flex mt-4 space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Añadir un recuerdo..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addMemory}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Agregar
          </button>
        </div>

        {/* Lista de recuerdos */}
        <ul className="mt-4 space-y-2">
          {memories.map((memory, index) => (
            <li
              key={memory}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-lg"
            >
              <span className="text-gray-700">{memory}</span>
              <button
                onClick={() => removeMemory(index)}
                className="text-red-600 hover:text-red-800 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
