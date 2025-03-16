function EstadoClima({ temperatura }: { temperatura: number }) {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-lg font-bold">Estado del Clima</h2>
      <p className={temperatura > 25 ? "text-red-400" : "text-blue-400"}>
        Temperatura: {temperatura}°C
      </p>
    </div>
  );
}

export default function App() {
  return <EstadoClima temperatura={10} />;
}
