// Se define Item como un componente funcional de React
function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li className="item">
      {name} {isPacked && " ✅"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
