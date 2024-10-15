import React from "react";
import { AlbumProps } from "@/album/interfaces/AlbumProps";

const Album: React.FC<AlbumProps> = ({ album }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-2xl">{album.title}</h2>
      <p>Album ID: {album.id}</p>
      <p>User ID: {album.userId}</p> {/* Display User ID */}
    </div>
  );
};

export default Album;
