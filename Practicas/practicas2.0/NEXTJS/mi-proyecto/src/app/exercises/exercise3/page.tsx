interface Person {
  name: string;
  confirmed: boolean;
}
const data: Person[] = [
  { name: "Juancho lopez", confirmed: false },
  { name: "Dani Gutierrez", confirmed: true },
  { name: "Luca Echeverria", confirmed: true },
];

function Guest({ name, confirmed }: { name: string; confirmed: boolean }) {
  return (
    <li className="guest">{confirmed ? <del>{name + " 🎉"}</del> : name}</li>
  );
}

export default function GuestList() {
  return (
    <div className="max-w-md mx-auto p-4 bg-amber-200 rounded-lg text-black">
      <h1 className="text-3xl font-bold text-center mb-4">
        Lista de invitados a la fiesta
      </h1>
      <ul>{/*Iteracion de la lista Person y ponerle su key*/}</ul>
    </div>
  );
}
