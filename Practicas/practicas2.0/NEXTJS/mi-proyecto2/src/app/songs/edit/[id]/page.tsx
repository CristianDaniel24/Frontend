"use client";

import Button from "@/components/button";
import ISong from "@/interfaces/songs-interface";
import { songService } from "@/services/songs-service";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type FormStatus = "invalid" | "valid" | "send";

export default function EditSong() {
  const { id } = useParams<{ id: string }>();
  const [formStatus, setFormStatus] = useState<FormStatus>("invalid");
  const [form, setForm] = useState<ISong>({} as ISong);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //Manejar cambios en el nombre
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
    setFormStatus("valid");
  };

  //Manejar cambios en el autor
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, author: e.target.value });
    setFormStatus("valid");
  };

  //Guardar la edicion
  const handleEdit = async () => {
    setFormStatus("send");
    try {
      console.log("Datos enviados al editar:", form);
      await songService.Edit(form);
      alert("Song edited satisfactory");
      router.push("/songs");
    } catch (error) {
      console.log("Error editing blog:", error);
      alert("Error editing song");
    }
  };

  //Obtener blog por id
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const blog = await songService.getById(+id);
        setForm(blog);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching song:", error);
        alert("Song not found");
        setLoading(false);
      }
    };
    fetchSong();
  }, [id]);

  if (loading) {
    return <span>Loading songs...</span>;
  }

  return (
    <div className="flex flex-col items-center pb-2 space-y-4 bg-amber-100">
      <div className="flex flex-col space-x-2.5">
        <h1 className="text-3xl">Edit the song:</h1>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleNameChange}
          className="border-2 border-b-zinc-800 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={form.author}
          onChange={handleAuthorChange}
          className="border-2 border-b-zinc-800 rounded-sm"
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <Button
          label="Edit"
          handleClick={handleEdit}
          disabled={formStatus !== "valid"}
        />
        <Button label="Back" path="/songs" />
      </div>
    </div>
  );
}
