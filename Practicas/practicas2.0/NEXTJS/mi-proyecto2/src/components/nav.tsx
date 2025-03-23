"use client";

import Button from "./button";

export default function Nav() {
  return (
    <div>
      <nav className="flex flex-col justify-center text-amber-500 bg-gray-500 py-12 mb-5">
        <h1 className="text-3xl text-center mb-5 uppercase">Blog nav:)</h1>

        <div className="flex flex-col space-y-5">
          <div className="flex flex-row justify-around space-x-6">
            <Button label="main" path="/" />
            <Button label="blogs" path="/blogs" />
            <Button label="blogs animals" path="/animals" />
            <Button label="songs" path="/songs"></Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
