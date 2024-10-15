import React, { useEffect, useState } from "react";
import UserList from "@/home/UserList";
import Loader from "@/components/Loader";
import { UserResponse } from "@/api/interface";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Type guard to check if the error is an instance of Error
  const isError = (error: unknown): error is Error => {
    return (error as Error).message !== undefined;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Update with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (isError(err)) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl mb-5">User List</h1>
      <UserList users={users} />
    </div>
  );
};

export default Home;
