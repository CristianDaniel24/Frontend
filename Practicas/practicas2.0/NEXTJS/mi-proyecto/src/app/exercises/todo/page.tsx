"use client";

import { useState } from "react";

type TaskStatus = "Todo" | "Completed";

interface Task {
  id: number;
  text: string;
  status: TaskStatus;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const tasksToAdd: Task = {
      id: Date.now(), //Id unico basado en timestamp
      text: newTask,
      status: "Todo",
    };

    setTasks((prevTask) => [...prevTask, tasksToAdd]);
    setNewTask("");
  };

  const handleToggleStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((tasks: Task) =>
        tasks.id === id
          ? { ...tasks, status: tasks.status === "Todo" ? "Completed" : "Todo" }
          : tasks
      )
    );
  };

  const handleRemoveTask = (index: number) => {
    setTasks((prevTask) => prevTask.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <div className="bg-amber-50 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-800">To do</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 p-2 border border-x-green-800 rounded-l focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-900 text-white px-2 rounded-lg hover:bg-green-950 transition"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-amber-50 p-2 rounded"
            >
              <div className="flex space-x-2">
                <input
                  type="checkbox"
                  checked={task.status === "Completed"}
                  onChange={() => handleToggleStatus(task.id)}
                />
                <span
                  className={`${
                    task.status === "Completed"
                      ? "line-through text-green-700"
                      : "text-amber-500"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
