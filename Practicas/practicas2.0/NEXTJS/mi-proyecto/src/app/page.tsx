import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh bg-amber-200">
      <div className="flex flex-col justify-center align-middle m-44 bg-gray-400 h-20">
        <h1 className="text-2xl text-zinc-300 md:text-6xl">Hello World</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 bg-amber-700 text-white mx-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nisi ullam placeat nulla nobis repudiandae, beatae animi expedita,
          iusto earum laboriosam officiis doloremque dignissimos repellendus
          consequuntur enim odio perspiciatis atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure,
          corporis voluptates maiores architecto eius praesentium, reprehenderit
          delectus inventore, quo id ipsam. Consequuntur doloremque ea est sed
          reprehenderit error ad!
        </p>
      </div>
    </div>
  );
}
