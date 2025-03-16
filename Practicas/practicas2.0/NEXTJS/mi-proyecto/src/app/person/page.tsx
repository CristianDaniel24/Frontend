export default function Person() {
  const name: string = "John";

  return (
    <div className="flex justify-center mx-10 border-2 border-amber-600 rounded-2xl bg-emerald-800 text-white">
      <h1 className="font-extrabold text-4xl">Person Page</h1>
      <p>Text with variable: {name === "Carlo" ? "Si" : "No"}</p>
    </div>
  );
}
