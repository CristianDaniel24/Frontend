"use client";

import Button from "@/components/button";
import { IBlog } from "@/interfaces/blog-interface";
import { blogService } from "@/services/blog-service";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormStatus = "invalid" | "valid" | "send";

export default function Addlog() {
  const [formStatus, setFormStatus] = useState<FormStatus>("invalid");
  const [form, setForm] = useState<IBlog>({} as IBlog);
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
    await blogService.Save(form);
    alert("Blog created!");
    router.push("/blogs");
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
          className="border-2 border-amber-500 rounded-sm p-1.5"
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <Button
          label="Save"
          handleClick={handleSave}
          disabled={formStatus !== "valid"}
        />
        <Button label="Cancel" path="/blogs" />
      </div>
      <hr />
      <div className="flex flex-col">
        <span>Title: {form.title}</span>
        <span>Content: {form.content}</span>
      </div>
    </div>
  );
}
