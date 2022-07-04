import React, { useState } from 'react'
import axios from "axios";

const ComponentAxiosCall = () => {
  const [users, setUsers] = useState([]);
  const getUsersData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <div>
      <div>List member kabayan koding: </div>
      <ul>
        {users.map((user, index) => (
          <li key={index} data-testid="user-name">{user.name}</li>
        ))}
      </ul>
      <button data-testid="get-users" onClick={getUsersData} type="button">get user</button>
    </div>
  )
}

export default ComponentAxiosCall