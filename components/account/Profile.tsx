import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <span className=" flex py-5 border-b items-center gap-x-2">
        <p className=" font-semibold capitalize">username:</p>
        <p className=" font-light from-neutral-600">
          {user.user_metadata.name}
        </p>
      </span>
      <span className=" flex py-5 border-b items-center gap-x-2">
        <p className=" font-semibold capitalize">Email:</p>
        <p className=" font-light from-neutral-600">
          {user.user_metadata.email}
        </p>
      </span>
      <span className=" py-5 flex items-center gap-x-2">
        <p className=" font-semibold capitalize">verified account:</p>
        <p className=" font-light from-neutral-600">
          {user.role}
        </p>
      </span>
     

    </div>
  );
};

export default Profile;
