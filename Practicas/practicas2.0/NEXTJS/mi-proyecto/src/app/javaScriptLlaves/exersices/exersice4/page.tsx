function MensajeEdad({ edad }: { edad: number }) {
  let mensaje;
  if (edad < 18) {
    mensaje = "Eres menor de edad.";
  } else {
    mensaje = "Eres mayor de edad.";
  }

  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
      <h2 className="font-bold">Tu edad: {edad}</h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default function App() {
  return <MensajeEdad edad={20} />;
}
