import React from "react";
import { UserProps } from "@/user/interfaces/UserProps";

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-2xl">{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone ? user.phone : "N/A"}</p>
      <p>Website: {user.website ? user.website : "N/A"}</p>

      <h4>Address:</h4>
      {/* optional chaining to access address properties safely */}
      <p>
        {user.address?.street ? user.address.street : "N/A"},{" "}
        {user.address?.city ? user.address.city : "N/A"}{" "}
        {user.address?.zipcode ? `(${user.address.zipcode})` : ""}
      </p>
      <p>
        Latitude: {user.address?.geo?.lat ? user.address.geo.lat : "N/A"},
        Longitude: {user.address?.geo?.lng ? user.address.geo.lng : "N/A"}
      </p>
    </div>
  );
};

export default User;
