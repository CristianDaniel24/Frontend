{
  /*interface Todo () => {

} */
}

{
  type TaskStatus = "Todo" | "Doing" | "Completed";

  interface Task {
    id: number;
    text: string;
    status: TaskStatus;
  }
}

export default function TaskManager() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100">
        <h1 className="text-3xl font-bold ">To do</h1>
        <ul className="shadow-lg bg-amber-200">
          <li className="min-w-80">
            <div className="m-2">
              <button className="bg-amber-300">
                <h1>Pasear el perro</h1>
              </button>
            </div>
            <div className=" m-2">
              <button type="button" className="bg-amber-300">
                <h1>Ir al cine</h1>
              </button>
            </div>
            <div className=" m-2">
              <button type="button" className="bg-amber-300">
                <h1>Hacer las compras</h1>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
