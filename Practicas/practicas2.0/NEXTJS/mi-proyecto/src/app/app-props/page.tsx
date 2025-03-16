import Children from "./children";
import Person from "./person";

export type TPerson = {
  name: string;
  email: string;
};

const personList: TPerson[] = [
  { name: "pepe", email: "pepe@pepe.net" },
  { name: "pepe2", email: "pepe2@pepe.net" },
];

export default function AppProps() {
  return (
    <div className="grid">
      <div>
        {personList.map((p) => (
          <Person key={p.name} person={p} />
        ))}
      </div>
      <div>
        <Children>
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum
            voluptate quam amet saepe fugiat architecto sunt vel perspiciatis
            natus minima, quo inventore, ad soluta, accusamus aliquid ipsum
            expedita modi.
          </p>
        </Children>
      </div>
    </div>
  );
}
