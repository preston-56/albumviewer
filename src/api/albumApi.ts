import api from "@/api/index";
import { Album } from "@/api/interface";

export const getAlbums = async (): Promise<Album[]> => {
  try {
    const response = await api.get<Album[]>("/api/albums");
    return response.data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

export const getAlbumById = async (albumId: number): Promise<Album> => {
  try {
    const response = await api.get<Album>(`/api/albums/${albumId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching album with ID ${albumId}:`, error);
    throw error;
  }
};
