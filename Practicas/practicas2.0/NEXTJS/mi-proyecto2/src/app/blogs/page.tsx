"use client";

import { IBlog } from "@/interfaces/blog-interface";
import { blogService } from "@/services/blog-service";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/button";

export default function BlogMain() {
  const [blogs, setBlogs] = useState<IBlog[]>();
  const currPath = usePathname();

  useEffect(() => {
    const getBlogs = async () => {
      const data = await blogService.getAll();
      setBlogs(data);
    };
    getBlogs();
  });

  if (!blogs) {
    return <span>Loading blogs...</span>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Button label="Add" path={`${currPath}/add`} />
      </div>
      <span>List of blogs:</span>
      <div>
        <ul>
          {blogs?.map((b) => (
            <li key={b.id}>
              <Link href={`${currPath}/${b.id}`}>{b.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
