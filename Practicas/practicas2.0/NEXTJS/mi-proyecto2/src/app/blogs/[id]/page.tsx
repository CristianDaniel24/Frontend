"use client";

import Button from "@/components/button";
import { IBlog } from "@/interfaces/blog-interface";
import { blogService } from "@/services/blog-service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

//When using server component
//interface Props {
//  params: Promise<{ id: number }>;
//}

export default function BlogDetail(/*{ params }: Readonly<Props> */) {
  //When using server component
  //const { id } = await params;
  //const blog = await blogService.getById(id);
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlog>();

  useEffect(() => {
    blogService
      .getById(+id)
      .then((blog) => setBlog(blog))
      .catch((err) => {
        throw err;
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
      <div className="flex justify-end">
        <Button label="back" path="/blogs" />
      </div>
    </div>
  );
}
