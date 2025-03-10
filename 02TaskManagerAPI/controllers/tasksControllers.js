const express = require("express");
const Tasks = require("../models/schema");
const getAllTasks = (req, res) => {
  res.send("get task");
};
const postTask = async (req, res) => {
  try {
    const taskCreated = await Tasks.create(req.body);
    res.status(201).json({ taskCreated });
  } catch (error) {

    res.status(501).json({message:error})
  }
};
const getOneTask = (req, res) => {
  res.send(`Task by id Tasks`);
};
const updateTasks = (req, res) => {
  res.send(`update Tasks`);
};
const deleteTasks = (req, res) => {
  res.send(`delete Tasks`);
};

module.exports = {
  getAllTasks,
  postTask,
  getOneTask,
  updateTasks,
  deleteTasks,
};
