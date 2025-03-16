const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return <h1>Lista de tareas pendientes del {formatDate(today)}</h1>;
}
