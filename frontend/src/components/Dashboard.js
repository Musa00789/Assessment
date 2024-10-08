import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { getTasks } from "../services/api";
import styles from "../styles/Dashboard.module.css";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    getTasks().then((response) => {
      console.log(response.data);
      setTasks(response.data);
    });
  };

  const completedCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const pendingCount = tasks.filter((task) => task.status === "pending").length;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedCount, pendingCount],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#45a049", "#e53935"],
      },
    ],
  };

  return (
    <div className={styles["dashboard"]}>
      <h1>Dashboard</h1>
      <div className={styles["stats"]}>
        <p className={styles["completed"]}>Completed Tasks: {completedCount}</p>
        <p className={styles["pending"]}>Pending Tasks: {pendingCount}</p>
      </div>
      <Doughnut data={data} width={300} height={300} />
    </div>
  );
};

export default Dashboard;
