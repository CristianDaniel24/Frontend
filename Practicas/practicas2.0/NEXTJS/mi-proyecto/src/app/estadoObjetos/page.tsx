"use client";

import { useState } from "react";

export default function userProfile() {
  const [user, setUser] = useState({
    name: "Jose Perez",
    email: "jose234@gmail.com",
    age: 23,
  });

  //Manejar los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name == "age" ? Number(value) : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Perfil de usuario
        </h2>

        <label className="block mb-2 font-semibold text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-semibold text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-semibold text-gray-700">Edad:</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rouded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="bg-blue-50 p-4 rounded-lg mt-6 text-blue-700">
          <p>
            <strong>Nombre: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Edad: </strong>
            {user.age}
          </p>
        </div>
      </div>
    </div>
  );
}
