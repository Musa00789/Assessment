import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import UserForm from "./UserForm";
import styles from "../styles/UserList.module.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers().then((response) => setUsers(response.data));
  };

  const handleDelete = (id) => {
    deleteUser(id).then(() => fetchUsers());
  };

  return (
    <div>
      <h1>User List</h1>
      <UserForm fetchUsers={fetchUsers} />
      <div className={styles.cardContainer}>
        {users.map((user) => (
          <div className={styles.card} key={user._id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Contact: {user.contactNumber}</p>
            <p>ID: {user._id}</p>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
