import React from "react";
import Image from "next/image";
import { PhotoProps } from "@/photo/interfaces/PhotoProps"; 

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-2xl">{photo.title}</h2> {/* Display photo title */}
      <p className="text-gray-600">Album ID: {photo.albumId}</p> {/* Display Album ID */}

      <Image 
        src={photo.url} 
        alt={photo.title} 
        width={600} 
        height={400} 
        className="w-full h-auto" 
      />
    </div>
  );
};

export default Photo;
