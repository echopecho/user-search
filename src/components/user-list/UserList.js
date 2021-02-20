import React, { useContext } from "react";
import { AppContext } from "../../context";
import UserCard from "../user-card/UserCard";
import Pagination from "../pagination/Pagination";
import { UserListContainer } from "./style";

function UserList() {
  const { state } = useContext(AppContext);
  const { loading, userList, error, errorMsg, query } = state;

  return (
    <div>
      {query !== "" ? (
        <p>Search results for {query}</p>
      ) : (
        <p>Github user search</p>
      )}
      <UserListContainer>
        {loading && <p>Loading...</p>}
        {error && <p>{errorMsg}</p>}
        {userList.map((user) => (
          <React.Fragment key={user.id}>
            <UserCard user={user} />
          </React.Fragment>
        ))}
      </UserListContainer>
      <Pagination />
    </div>
  );
}

export default UserList;
