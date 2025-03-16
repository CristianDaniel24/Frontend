function Recipe({ drinkers }: { drinkers: number }) {
  return (
    <ol>
      <li>Hervir {drinkers} tazas de agua.</li>
      <li>
        Añadir {drinkers} cucharadas de té y {0.5 * drinkers} cucharada de
        especias.
      </li>
      <li>
        Añadir {0.5 * drinkers} tazas de leche hirviendo y azúcar a gusto.
      </li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Receta de té Chai especiado</h1>
      <h2>Para dos</h2>
      <Recipe drinkers={2} />
      <h2>Para una reunión</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
