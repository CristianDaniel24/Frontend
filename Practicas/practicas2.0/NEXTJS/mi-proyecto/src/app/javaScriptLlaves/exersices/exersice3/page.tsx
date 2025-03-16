function ListaNumeros() {
  const numeros = [];
  for (let i = 1; i <= 5; i++) {
    numeros.push(i);
  }

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Lista de Números</h2>
      <ul className="list-disc">
        {numeros.map((num) => (
          <li key={num} className="text-blue-400">
            Numero: {num}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNumeros;
