import React, { useContext } from "react";
import { AppContext } from "../../context";
import UserCard from "../user-card/UserCard";
import Pagination from '../pagination/Pagination';

function UserList() {
  const { state } = useContext(AppContext);
  const { loading, userList, error, errorMsg, query } = state;
  return (
    <div>
      {query !== '' && <p>Search Results for {query}</p>}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{errorMsg}</p>}
        {userList.map((user) => (
          <React.Fragment key={user.id}>
            <UserCard user={user} />
          </React.Fragment>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default UserList;
