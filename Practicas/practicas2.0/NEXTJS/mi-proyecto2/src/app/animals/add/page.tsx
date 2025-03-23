"use client";

import { useState } from "react";
import { IBlogAnimals } from "@/interfaces/blog-animals-interface";
import { useRouter } from "next/navigation";
import { blogAnimalService } from "@/services/blog-animal-service";
import Button from "@/components/button";

type FormStatus = "invalid" | "valid" | "send";

export default function Addlog() {
  const [formStatus, setFormStatus] = useState<FormStatus>("invalid");
  const [form, setForm] = useState<IBlogAnimals>({} as IBlogAnimals);
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value });
    setFormStatus("valid");
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, content: e.target.value });
    setFormStatus("valid");
  };

  const handleSave = async () => {
    setFormStatus("send");
    await blogAnimalService.Save(form);
    alert("Blog created!");
    router.push("/animals");
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-x-2.5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          className="border-2 border-amber-500 rounded-sm p-1.5"
        />
      </div>
      <div className="flex flex-col space-x-2.5">
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handleContentChange}
          className="border-2 border-e-amber-500 rounded-sm p-1.5"
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <Button
          label="Save"
          handleClick={handleSave}
          disabled={formStatus !== "valid"}
        />
        <Button label="Cancel" path="/animals" />
      </div>
      <hr />
      <div className="flex flex-col">
        <span>Title: {form.title}</span>
        <span>Content: {form.content}</span>
      </div>
    </div>
  );
}
