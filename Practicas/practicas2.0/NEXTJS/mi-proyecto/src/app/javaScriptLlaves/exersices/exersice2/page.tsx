function ListaPersonas() {
  const listaPersonas = [
    { id: 1, name: "Edwin", age: 18, lastName: "Rojas" },
    { id: 2, name: "Lucas", age: 23, lastName: "Echeverria" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 text-white ">
      <h1 className="text-3xl font-bold mb-6 hover:animate-pulse">
        Lista de programadores:
      </h1>
      <ul>
        {listaPersonas.map((persona) => {
          return (
            <li
              key={persona.id}
              className="p-4 border-b last:border-b-5 border-gray-500 transition duration-300 transform hover:scale-105"
            >
              <div className="flex flex-row space-x-2 space-y-5">
                <span className="text-lg font-semibold text-yellow-400">
                  Name:
                </span>
                <span>{persona.name}</span>
              </div>
              <div className="flex flex-row space-x-2 space-y-5">
                <span className="text-lg font-semibold text-red-400">Age:</span>
                <span>{persona.age}</span>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-lg font-semibold text-green-400">
                  LastName:
                </span>
                <span>{persona.lastName}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListaPersonas;
