function Task({ name, isCompleted }: { name: string; isCompleted: boolean }) {
  return (
    <li className="task">{isCompleted ? <del>{name + " ✅"}</del> : name}</li>
  );
}

export default function TaskList() {
  return (
    <section className="max-w-md mx-auto p-4 bg-blue-100 rounded-lg text-amber-300">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Lista de tareas
      </h1>
      <ul className="space-y-6">
        <Task isCompleted={true} name="Sacar el perro al parque" />
        <Task isCompleted={false} name="Lavar la bicicleta" />
        <Task isCompleted={true} name="Barrer y limpiar la casa" />
      </ul>
    </section>
  );
}
