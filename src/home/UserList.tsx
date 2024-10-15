import React from "react";
import UserItem from "@/home/UserItem";
import { UserResponse } from "@/api/interface";

interface UserListProps {
  users: UserResponse[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
