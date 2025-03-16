"use client";

import { useState } from "react";
import { sculptureList } from "../exersices/data/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Siguiente
        </button>
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          <i>{sculpture.name}</i> por {sculpture.artist}
        </h2>
        <h3 className="text-gray-600 text-sm">
          ({index + 1} de {sculptureList.length})
        </h3>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          className="mt-4 w-full h-auto rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-700">{sculpture.description}</p>
      </div>
    </div>
  );
}
