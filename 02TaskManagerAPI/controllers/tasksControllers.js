const express = require("express");
const Tasks = require("../models/schema");
const asynchronousWrapper = require("../middleware/asyncWrap");
const getAllTasks = asynchronousWrapper(async (req, res) => {
  const getAll = await Tasks.find({});
  res.status(201).json({ getAll });
});
const postTask = asynchronousWrapper(async (req, res) => {
  const taskCreated = await Tasks.create(req.body);
  res.status(201).json({ taskCreated });
});
const getOneTask = asynchronousWrapper(async (req, res) => {
  const getSingle = await Tasks.findOne({ _id: req.params.id });
  if (!getSingle) {
    return res.status(404).json({ message: "No task with id" });
  }
  res.status(201).json({ getSingle });
});
const updateTasks = asynchronousWrapper(async (req, res) => {
  const changeTask = await Tasks.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!changeTask) {
    return res.status(404).json({ message: "No task with id" });
  }
  res.status(200).json({ changeTask });
});
const deleteTasks = asynchronousWrapper(async (req, res) => {
  const deletingTask = await Tasks.findOneAndDelete({ _id: req.params.id });
  if (!deletingTask) {
    return res.status(404).json({ message: "No task with id" });
  }
  res.status(200).json({ deletingTask });
});

module.exports = {
  getAllTasks,
  postTask,
  getOneTask,
  updateTasks,
  deleteTasks,
};
