import api from "@/api/index";
import { PhotoResponse, SimplifiedPhoto } from "@/api/interface"; // Import the Photo interfaces

export const getPhotos = async (): Promise<SimplifiedPhoto[]> => {
  try {
    const response = await api.get<PhotoResponse[]>("/api/photos"); // Use PhotoResponse

    const photos: SimplifiedPhoto[] = response.data.map((photo) => ({
      albumId: photo.albumId,
      id: photo.id,
      title: photo.title,
      url: photo.url
    }));

    return photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};

// fetch a photo by its ID
export const getPhotoById = async (
  photoId: number
): Promise<SimplifiedPhoto> => {
  try {
    const response = await api.get<PhotoResponse>(`/api/photos/${photoId}`);

    // Return only the required fields
    const photo: SimplifiedPhoto = {
      albumId: response.data.albumId,
      title: response.data.title,
      url: response.data.url
    };

    return photo;
  } catch (error) {
    console.error(`Error fetching photo with ID ${photoId}:`, error);
    throw error;
  }
};
