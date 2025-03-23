"use client";

import { IBlogAnimals } from "@/interfaces/blog-animals-interface";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { blogAnimalService } from "@/services/blog-animal-service";
import Button from "@/components/button";
import Link from "next/link";

export default function BlogAnimals() {
  const [blogs, setBlogs] = useState<IBlogAnimals[]>();
  const currPath = usePathname();

  useEffect(() => {
    const getBlogs = async () => {
      const data = await blogAnimalService.getAll();
      setBlogs(data);
    };
    getBlogs();
  });

  if (!blogs) {
    return <span>Loading blogs of animals...</span>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Button label="Add" path={`${currPath}/add`} />
      </div>
      <span>List of blogs of animals:</span>
      <div>
        <ul>
          {blogs.map((b) => (
            <li key={b.id}>
              <Link href={`${currPath}/${b.id}`} className="p-3">
                {b.title}
              </Link>
              <Button label="Edit" path={`${currPath}/edit/${b.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
