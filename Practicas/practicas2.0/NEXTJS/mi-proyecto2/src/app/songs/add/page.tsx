"use client";

import Button from "@/components/button";
import ISong from "@/interfaces/songs-interface";
import { songService } from "@/services/songs-service";
import { useRouter } from "next/router";
import { useState } from "react";

type SongStatus = "invalid" | "valid" | "send";

export default function AddSong() {
  const [formStatus, setFormStatus] = useState<SongStatus>("invalid");
  const [form, setForm] = useState<ISong>({} as ISong);
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
    setFormStatus("valid");
  };

  // No se puede editar la duracion porque es de tipo number
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, author: e.target.value });
    setFormStatus("valid");
  };

  const handleSave = async () => {
    setFormStatus("send");
    await songService.Save(form);
    alert("Song created");
    router.push("/songs");
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-x-2.5">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
          className="border-2 border-amber-500 rounded-sm p-1.5"
        />
      </div>
      <div className="flex flex-col space-x-2.5">
        <label htmlFor="name">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={handleAuthorChange}
          className="border-2 border-amber-500 rounded-sm p-1.5"
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <Button
          label="Save"
          handleClick={handleSave}
          disabled={formStatus !== "valid"}
        />
        <Button label="Cancel" path="/songs" />
      </div>
      <hr />
      <div className="flex flex-col">
        <span>Name: {form.name}</span>
        <span>Duration: {form.duration}</span>
        <span>Author: {form.author}</span>
      </div>
    </div>
  );
}
