"use client";

import React, { useState } from "react";
import { Task } from "@/interface/task-interface";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (editingId !== null) {
      setTasks(
        tasks.map((task) => (task.id === editingId ? { ...task, title } : task))
      );
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setTitle("");
  };

  const handleEdit = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setTitle(task.title);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="border border-gray-300 rounded p-2 flex-grow"
            type="text"
            placeholder="Enter task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={handleAddOrEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {editingId !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center mb-2 bg-gray-50 p-2 rounded"
            >
              <span
                onClick={() => toggleComplete(task.id)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="text-sm text-yellow-500 hover:text-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
