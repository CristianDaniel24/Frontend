type CupProps = {
  guest: number
}

function Cup({guest}: CupProps) {
  return <h2>Taza de té para invitado #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
