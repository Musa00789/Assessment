import React, { useEffect, useState } from "react";
import { getTasksByUser, deleteTask } from "../services/api";
import TaskForm from "./TaskForm";
import styles from "../styles/TaskList.module.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    getTasksByUser().then((response) => setTasks(response.data));
  };

  const handleDelete = (id) => {
    deleteTask(id).then(() => fetchTasks());
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm
        fetchTasks={fetchTasks}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <div className={styles.cardContainer}>
        {tasks.map((task) => (
          <div className={styles.card} key={task._id}>
            <h2>{task.title}</h2>
            <p>
              User ID:{" "}
              {task.user.length > 6
                ? `${task.user.substring(0, 6)}...`
                : task.user}
            </p>
            <p>Status: {task.status}</p>
            <div>
              <button
                onClick={() => setSelectedTask(task)}
                className={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
