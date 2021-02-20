import React from "react";
import { UserCardContainer } from "./style";

function UserCard({ user }) {
  return (
    <UserCardContainer>
      <img src={user.avatar_url} alt="user" />
      <div className="username">
        <a href={user.html_url} target="_blank" rel="noreferrer  noopener">
          {user.name}
        </a>
        <span>{user.login}</span>
        <span className="followers">{user.followers} Followers</span>
      </div>
      <p className="location">{user.location}</p>
      <hr />
      <p className="bio">{user.bio}</p>
      <div className="contact">
        {user.company && <span>{user.company}</span>}
        {user.email && <span>{user.email}</span>}
        {user.blog && (
          <a href={user.blog} target="_blank" rel="noreferrer noopener">
            {user.blog}
          </a>
        )}
      </div>
    </UserCardContainer>
  );
}

export default UserCard;
