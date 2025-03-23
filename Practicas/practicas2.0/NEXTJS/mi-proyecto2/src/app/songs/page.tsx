"use client";

import Button from "@/components/button";
import ISong from "@/interfaces/songs-interface";
import { songService } from "@/services/songs-service";
import { spawn } from "child_process";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Songs() {
  const [songs, setSongs] = useState<ISong[]>();
  const currPath = usePathname();

  useEffect(() => {
    const getBlogs = async () => {
      const data = await songService.getAll();
      setSongs(data);
    };
    getBlogs();
  });

  if (!songs) {
    return <span>Loading songs...</span>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Button label="Add" path={`${currPath}/add`} />
      </div>
      <span>List of songs:</span>
      <div>
        <ul>
          {songs.map((s) => (
            <li key={s.id}>
              <Link href={`${currPath}/${s.id}`} className="p-3">
                {s.name}
              </Link>
              <Button label="Edit" path={`${currPath}/edit/${s.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
