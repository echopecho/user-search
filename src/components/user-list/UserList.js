import React, { useContext } from "react";
import { AppContext } from "../../context";
import UserCard from "../user-card/UserCard";

function UserList() {
  const { state } = useContext(AppContext);
  const { loading, userList, error, errorMsg } = state;
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{errorMsg}</p>}
      {userList.map((user) => (
        <React.Fragment key={user.id}>
          <UserCard user={user} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default UserList;
