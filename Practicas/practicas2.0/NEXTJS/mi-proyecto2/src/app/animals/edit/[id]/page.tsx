"use client";

import { useEffect, useState } from "react";
import { IBlogAnimals } from "@/interfaces/blog-animals-interface";
import { blogAnimalService } from "@/services/blog-animal-service";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/button";

type FormStatus = "invalid" | "valid" | "send";

export default function EditBlog() {
  const { id } = useParams<{ id: string }>();
  const [formStatus, setFormStatus] = useState<FormStatus>("invalid");
  const [form, setForm] = useState<IBlogAnimals>({} as IBlogAnimals);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //Manejar cambios en el titulo
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value });
    setFormStatus("valid");
  };

  //Manejar cambios en el contenido
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, content: e.target.value });
    setFormStatus("valid");
  };

  //Guardar edicion
  const handleEdit = async () => {
    setFormStatus("send");
    try {
      console.log("Datos enviados al editar:", form);

      await blogAnimalService.Edit(form);
      alert("Blog edited satisfactory!!");
      router.push("/animals");
    } catch (error) {
      console.log("Error editing blog:", error);
      alert("Error editing blog!");
    }
  };

  //Obtener blog por id
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await blogAnimalService.getById(+id);
        setForm(blog); //Guardamos el blog completo en form
        setLoading(false);
      } catch (error) {
        console.log("Error fetching blog:", error);
        alert("Blog not found!");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <span>Loading blogs of animals...</span>;
  }

  return (
    <div className="flex flex-col items-center pb-2 space-y-4 bg-amber-100">
      <div className="flex flex-col space-x-2.5">
        <h1 className="text-3xl">Edit the blog of animals</h1>
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="title"
          id="title"
          name="title"
          value={form.title}
          onChange={handleTitleChange}
          className="border-2 border-b-zinc-800 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          type="content"
          id="content"
          name="content"
          value={form.content}
          onChange={handleContentChange}
          className="border-2 border-b-zinc-800 rounded-sm"
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <Button
          label="Edit"
          handleClick={handleEdit}
          disabled={formStatus !== "valid"}
        />
        <Button label="Back" path="/animals" />
      </div>
    </div>
  );
}
