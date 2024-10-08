// routes/dashboardRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Task = require("../models/Task");

// Dashboard overview
router.get("/", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTasks = await Task.countDocuments();
    const completedTasks = await Task.countDocuments({ status: "completed" });
    const pendingTasks = await Task.countDocuments({ status: "pending" });

    res.json({
      totalUsers,
      totalTasks,
      completedTasks,
      pendingTasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error });
  }
});

module.exports = router;
