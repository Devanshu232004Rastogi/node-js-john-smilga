const express = require("express");
const Tasks = require("../models/schema");
const getAllTasks = async (req, res) => {
  try {
    const getAll = await Tasks.find({});
    res.status(201).json({ getAll });
  } catch (error) {
    res.status(501).json({ message: error });
  }
};
const postTask = async (req, res) => {
  try {
    const taskCreated = await Tasks.create(req.body);
    res.status(201).json({ taskCreated });
  } catch (error) {
    res.status(501).json({ message: error });
  }
};
const getOneTask = async (req, res) => {
  try {
    const getSingle = await Tasks.findOne({ _id: req.params.id });
    if (!getSingle) {
      return res.status(404).json({ message: "No task with id" });
    }
    res.status(201).json({ getSingle });
  } catch (error) {
    res.status(501).json({ message: error });
  }
};
const updateTasks = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const deleteTasks = async (req, res) => {
  try {
    const deletingTask = await Tasks.findOneAndDelete({ _id: req.params.id });
    if (!deletingTask) {
      return res.status(404).json({ message: "No task with id" });
    }
    res.status(200).json({ deletingTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllTasks,
  postTask,
  getOneTask,
  updateTasks,
  deleteTasks,
};
