"use client";

import { IBlogAnimals } from "@/interfaces/blog-animals-interface";
import { blogAnimalService } from "@/services/blog-animal-service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/button";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlogAnimals>();

  useEffect(() => {
    blogAnimalService
      .getById(+id)
      .then((blog) => setBlog(blog))
      .catch((error) => {
        throw error;
      });
  });

  if (!blog) {
    return <span>Loading blog...</span>;
  }
  return (
    <div className="flex flex-col">
      <div>
        <span>Id:</span>
        {blog.id}
      </div>
      <div>
        <span>Title:</span>
        {blog.title}
      </div>
      <div>
        <span>Content:</span>
        {blog.content}
      </div>
      <div>
        <span>Type:</span>
        {blog.type}
      </div>
      <div className="flex justify-end">
        <Button label="back" path="/animals" />
      </div>
    </div>
  );
}
