import React from "react";
import { UserDetailsProps } from "@/user/interfaces/UserDetailsProps";

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl">Details for {user.name}</h3>
      <p>
        <strong>Company:</strong> {user.company?.name || "N/A"}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {user.company?.catchPhrase || "N/A"}
      </p>
      <p>
        <strong>BS:</strong> {user.company?.bs || "N/A"}
      </p>
    </div>
  );
};

export default UserDetails;
