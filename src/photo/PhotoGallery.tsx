import React, { useEffect, useState } from "react";
import PhotoItem from "@/photo/PhotoItem";
import Loader from "@/components/Loader";
import { PhotoResponse } from "@/api/interface";
import Navbar from "@/components/Navbar";

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: PhotoResponse[] = await response.json();
        setPhotos(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Albums", path: "/albums" },
    { name: "About", path: "/about" },
  ];

  if (loading) {
    return <Loader />;
  }
  if (error) return <div>Error: {error}</div>;
  if (photos.length === 0) {
    return <div>No photos available.</div>;
  }

  return (
    <div>
      <Navbar title="Photo Gallery" links={links} />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
