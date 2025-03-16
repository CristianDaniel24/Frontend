import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <div className="p-25">
        <img
          className="w-72 h-90 rounded-lg border-2 border-red-700 transition duration-300 hover:opacity-75 hover:scale-105"
          src="/imageComponent.jpg"
          alt="Katherine Johnson"
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/componentes/raizComponentes/">Raiz Componentes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
