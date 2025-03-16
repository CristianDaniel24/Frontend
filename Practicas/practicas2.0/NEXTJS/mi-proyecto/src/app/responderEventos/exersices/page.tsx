"use client"; //Indica a Next.js que este archivo debe ejecutarse en el cliente y no en el servidor

interface AlertButtonProps {
  message: string;
  children: React.ReactNode;
}

function AlertButton({ message, children }: AlertButtonProps) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col justify-center w-md m-auto border-4 border-amber-300 p-8 space-y-5">
        <AlertButton message="Reproduciendo">Reproducir película</AlertButton>
        <AlertButton message="Subiendo">Subir imagen</AlertButton>
        <button onClick={handleClick}>Botton</button>
      </div>
    </div>
  );
}
