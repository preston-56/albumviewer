import React from "react";
import { UserResponse } from "@/api/interface";

interface UserItemProps {
  user: UserResponse;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="border p-4 mb-2 rounded shadow">
      <h3 className="text-xl">{user.name}</h3>
      <p>Email: {user.email}</p>
      {/* more user details  */}
    </div>
  );
};

export default UserItem;
