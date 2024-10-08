
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");


router.post("/", async (req, res) => {
  const { title, userId } = req.body;

  try {
    const newTask = new Task({ title, user: userId });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
});


router.put("/:id", async (req, res) => {
  const { title, status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
});


router.get("/:id", async (req, res) => {
  const { userId } = req.query;

  try {
    const tasks = await Task.find({ user: userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find(); 
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

module.exports = router;
