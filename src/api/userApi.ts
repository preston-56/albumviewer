import api from "@/api/index";
import { UserResponse, SimplifiedUser } from "@/api/interface";

export const getUsers = async (): Promise<SimplifiedUser[]> => {
  try {
    const response = await api.get<UserResponse[]>("/api/users");

    const users: SimplifiedUser[] = response.data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    }));

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (userId: number): Promise<SimplifiedUser> => {
  try {
    const response = await api.get<UserResponse>(`/api/users/${userId}`);

    // required user fields
    const user: SimplifiedUser = {
      id: response.data.id,
      name: response.data.name,
      username: response.data.username,
      email: response.data.email
    };

    return user;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};
