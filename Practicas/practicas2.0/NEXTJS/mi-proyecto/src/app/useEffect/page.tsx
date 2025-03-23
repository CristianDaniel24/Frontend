"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-yellow-100 rounded-lg shadow text-center">
      <h1 className="text-2xl font-bold text-gray-800">Reloj</h1>
      <p className="text-xl text-blue-600 mt-4">{time}</p>
    </div>
  );
}
