import React, { useEffect, useState } from "react";
import { createUser, updateUser } from "../services/api";
import styles from "../styles/Form.module.css";

function UserForm({ fetchUsers, selectedUser, setSelectedUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        contactNumber: selectedUser.contactNumber,
      });
    } else {
      setFormData({ name: "", email: "", contactNumber: "" });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser(selectedUser._id, formData).then(() => {
        fetchUsers();
        setSelectedUser(null);
      });
    } else {
      createUser(formData).then(() => {
        fetchUsers();
      });
    }
    setFormData({ name: "", email: "", contactNumber: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        placeholder="Contact Number"
        required
      />
      <button type="submit">{selectedUser ? "Update User" : "Add User"}</button>
    </form>
  );
}

export default UserForm;
