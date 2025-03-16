import { TPerson } from "./page";

export default function Person({ person }: { person: TPerson }) {
  return (
    <div className="flex flex-col-gap-5">
      <div className="flex flex-row space-x-1.5">
        <span className="font-bold">Name: </span> {person.name}
        <span className="font-bold">Email: </span> {person.email}
      </div>
    </div>
  );
}
