"use client";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Lista de Tareas
        </h2>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Escribe una tarea..."
            className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 rounded-r hover:bg-purple-700 transition"
          >
            Agregar
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={task}
              className="flex justify-between items-center bg-purple-50 p-2 rounded"
            >
              <span className="text-purple-800">{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No hay tareas aun</p>
        )}
      </div>
    </div>
  );
}
