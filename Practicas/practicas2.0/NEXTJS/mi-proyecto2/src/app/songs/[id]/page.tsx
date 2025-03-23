"use client";

import Button from "@/components/button";
import ISong from "@/interfaces/songs-interface";
import { songService } from "@/services/songs-service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SongsDetail() {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<ISong>();

  useEffect(() => {
    songService
      .getById(+id)
      .then((song) => setSong(song))
      .catch((error) => {
        throw error;
      });
  });

  if (!song) {
    return <span>Loading Song...</span>;
  }
  return (
    <div className="flex flex-col">
      <div>
        <span>Id:</span>
        {song.id}
      </div>
      <div>
        <span>Name:</span>
        {song.name}
      </div>
      <div>
        <span>Duration:</span>
        {song.duration}
      </div>
      <div>
        <span>Author</span>
        {song.author}
      </div>
      <div className="flex justify-end">
        <Button label="back" path="/songs" />
      </div>
    </div>
  );
}
