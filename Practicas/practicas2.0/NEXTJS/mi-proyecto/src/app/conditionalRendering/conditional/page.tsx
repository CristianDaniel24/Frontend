function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item name="Traje de vuelo" isPacked={true} />
        <Item name="Casco con dorado a la hoja" isPacked={true} />
        <Item name="Fotografía de Tam" isPacked={false} />
      </ul>
    </section>
  );
}
