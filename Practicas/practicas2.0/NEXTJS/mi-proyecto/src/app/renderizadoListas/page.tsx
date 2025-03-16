const people = [
  "Creola Katherine Johnson: matemática",
  "Mario José Molina-Pasquel Henríquez: químico",
  "Mohammad Abdus Salam: físico",
  "Percy Lavon Julian: químico",
  "Subrahmanyan Chandrasekhar: astrofísico",
];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
