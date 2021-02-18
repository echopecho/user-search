import React from "react";

function UserCard({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt="user" />
      <p>{user.name}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserCard;
