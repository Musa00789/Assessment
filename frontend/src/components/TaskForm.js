import React, { useEffect, useState } from "react";
import { createTask, getUsers, updateTask } from "../services/api";
import styles from "../styles/Form.module.css";

function TaskForm({ fetchTasks, selectedTask, setSelectedTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
    if (selectedTask) {
      setTaskTitle(selectedTask.title);
      setUserId(selectedTask.userId);
      setStatus(selectedTask.status);
    } else {
      resetForm();
    }
  }, [selectedTask]);

  const resetForm = () => {
    setTaskTitle("");
    setUserId("");
    setStatus("pending");
  };

  const handleCreateTask = () => {
    createTask({ title: taskTitle, userId, status }).then(() => {
      fetchTasks();
      resetForm();
    });
  };

  const handleUpdateTask = () => {
    updateTask(selectedTask._id, { title: taskTitle, userId, status }).then(
      () => {
        fetchTasks();
        setSelectedTask(null);
        resetForm();
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      handleUpdateTask();
    } else {
      handleCreateTask();
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} (ID: {user._id})
            </option>
          ))}
        </select>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">
          {selectedTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
