export default function Avatar() {
  const avatar = "/llavesOverview.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <div>
      <img
        className="avatar flex h-60 w-60 rounded-full border-4 border-yellow-600 hover:grayscale-75 hover:rotate-6"
        src={avatar}
        alt={description}
      />
      <h1>Lista de tareas pendientes de {description}</h1>;
    </div>
  );
}
