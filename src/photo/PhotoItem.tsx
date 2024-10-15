import React from "react";
import Image from "next/image";
import { PhotoProps } from "@/photo/interfaces/PhotoProps";

const PhotoItem: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div className="border p-2 rounded shadow mb-2">
      <h3 className="text-lg">{photo.title}</h3>
      <Image src={photo.thumbnailUrl} alt={photo.title} className="w-32 h-32" />
    </div>
  );
};

export default PhotoItem;
