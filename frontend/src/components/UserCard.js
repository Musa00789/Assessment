import React from "react";
import styles from "../styles/UserCard.module.css";

function UserCard({ user, onDelete }) {
  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Contact: {user.contactNumber}</p>
      <button onClick={() => onDelete(user._id)}>Delete</button>
    </div>
  );
}

export default UserCard;
